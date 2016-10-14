var angular = require('angular');
var bootstrap = require('angular-ui-bootstrap');
var nemLogging = require('angular-simple-logger');
var leaflet = require('leaflet');
var leafletDraw = require('leaflet-draw');
var togpx = require('togpx');
var tokml = require('tokml');
var uiLeaflet = require('ui-leaflet');
var uiLeafletDraw = require('ui-leaflet-draw');
var vkbeautify = require('vkbeautify');

var qwyck = qwyck || {};

qwyck.dataTypes = {
    json: {
        ext: "json",
        mime: "application/json",
        output: function(input, beautify = false) {
            var data = JSON.stringify(input.toGeoJSON());
            return (beautify) ? vkbeautify.json(data) : data;
        }
    },
    gpx: {
        ext: "gpx",
        mime: "application/gpx+xml",
        output: function(input, beautify = false) {
            var data = togpx(input.toGeoJSON());
            return (beautify) ? vkbeautify.xml(data) : data;
        }
    },
    kml: {
        ext: "kml",
        mime: "application/vnd.google-earth.kml+xml",
        output: function(input, beautify = false) {
            var data = tokml(input.toGeoJSON());
            return (beautify) ? vkbeautify.xml(data) : data;
        }
    }
}

var app = angular.module('trails', ['nemLogging', 'ui-leaflet', 'ui.bootstrap']);

angular.module('trails').directive('navigation', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/navigation.html'
    };
});

angular.module('trails').directive('export', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/export.html',
    };
});

angular.module('trails').directive('popup', function($compile, $templateRequest, $sce) {
    return {
        restrict: 'E',
        replace: true,
        link: function(scope, element, attrs) {
            var templateUrl = $sce.getTrustedResourceUrl('templates/popup.html');

            $templateRequest(templateUrl).then(function(template) {
                var html = $compile(template)(scope);
                element.append(html);
            });
        }
    };
});

angular.module('trails').filter('formatFeatures', function() {
    return function(input, format) {
        return (input instanceof L.FeatureGroup) ? qwyck.dataTypes[format].output(input, true) : '';
    }
});

angular.module('trails').controller("mapCtrl", ['$scope', '$compile', 'leafletDrawEvents', function($scope, $compile, leafletDrawEvents) {
    $scope.features = new L.FeatureGroup();
    
    // Set up ui-leaflet and ui-leaflet-draw options
    angular.extend($scope, {
        map: {
            defaults: {
                maxZoom: 20,
                minZoom: 1,
                closePopupOnClick: false,
                tileLayer: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicXd5Y2siLCJhIjoiY2lzeXhqa3Z6MDA1MDJ6bzN2MXY2eHh0bSJ9.iAPf9IhnK6N7MrkIM_3pJA',
                tileLayerOptions: {
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
                },
                center: {
                    lat: 53.0685,
                    lng: -4.0763,
                    zoom: 15
                }
            },
            drawOptions: {
                draw: {
                    polygon: false,
                    rectangle: false,
                    circle: false,
                    marker: false
                },
                edit: {
                    featureGroup: $scope.features
                } 
            }
        }
    });

    // Handle leafletDrawEvents
    var handle = {
        created: function(e, leafletEvent, leafletObject, model, modelName) {
            var layer = leafletEvent.layer;
            
            // Create & bind popup template to the newly created layer
            var popupScope = $scope.$new(true);
            popupScope.layer = layer;
            var popupHtml = $compile('<popup></popup>')(popupScope)[0];
            layer.bindPopup(popupHtml);

            // http://stackoverflow.com/a/35819611
            var feature = layer.feature = layer.feature || {};
            feature.type = "Feature";
            feature.properties = feature.properties || {};
            feature.properties.name = "Random" + Math.floor(Math.random() * 1000);

            $scope.features.addLayer(layer);
        },
        edited: function(arg) {},
        deleted: function(arg) {
            var layers;
            layers = arg.layers;
            $scope.features.removeLayer(layer);
        },
        drawstart: function(arg) {},
        drawstop: function(arg) {},
        editstart: function(arg) {},
        editstop: function(arg) {},
        deletestart: function(arg) {},
        deletestop: function(arg) {}
    };

    var drawEvents = leafletDrawEvents.getAvailableEvents();

    drawEvents.forEach(function(eventName){
        $scope.$on('leafletDirectiveDraw.' + eventName, function(e, payload) {
          var leafletEvent, leafletObject, model, modelName;
          leafletEvent = payload.leafletEvent, leafletObject = payload.leafletObject, model = payload.model, modelName = payload.modelName;

          handle[eventName.replace('draw:','')](e, leafletEvent, leafletObject, model, modelName);
        });
    });
}]);

angular.module('trails').controller('exportCtrl', ['$scope', '$uibModal', function($scope, $uibModal){
    $scope.dataTypes = qwyck.dataTypes;
    $scope.tabs = [
        {
            title: "GeoJSON",
            format: "json"
        },
        {
            title: "GPX",
            format: "gpx"
        },
        {
            title: "KML",
            format: "kml"
        }
    ];

    $scope.setExportFormat = function(format) {
        $scope.exportFormat = format;
    }

    $scope.openExport = function () {
        var modalInstance;
        var modalScope = $scope.$new();

        modalScope.download = function () {
            var format = $scope.exportFormat;
            var data = $scope.dataTypes[format].output($scope.$parent.features);
            var filename = "Route1." + $scope.dataTypes[format].ext;
            var options = {
                type: $scope.dataTypes[format].mime + ";charset=utf-8"
            }

            // http://stackoverflow.com/a/20194533
            var tempElem = window.document.createElement('a');
            tempElem.href = window.URL.createObjectURL(new Blob([data], options));
            tempElem.download = filename;

            document.body.appendChild(tempElem)
            tempElem.click();
            
            // tidy up
            document.body.removeChild(tempElem)
        };

        modalScope.close = function () {
            modalInstance.dismiss('cancel');
        };      

        modalInstance = $uibModal.open({
            template: '<export></export>',
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            windowClass: 'export-modal',
            size: 'lg',
            scope: modalScope
        });
    };
}]);