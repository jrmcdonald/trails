module.exports = function($scope, $compile, leafletBoundsHelpers, leafletDrawEvents) {
    $scope.features = new L.FeatureGroup();

    var bounds = leafletBoundsHelpers.createBoundsFromArray([
        [53.0685, -4.0763],
        [53.0685, -4.0763]
    ]);
    
    // Set up ui-leaflet and ui-leaflet-draw options
    angular.extend($scope, {
        map: {
            bounds: bounds,
            center: {},
            defaults: {
                maxZoom: 18,
                minZoom: 1,
                closePopupOnClick: false,
                tileLayer: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicXd5Y2siLCJhIjoiY2lzeXhqa3Z6MDA1MDJ6bzN2MXY2eHh0bSJ9.iAPf9IhnK6N7MrkIM_3pJA',
                tileLayerOptions: {
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
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
            $scope.attachPopup(layer);

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

    $scope.attachPopup = function(layer) {
        var popupScope = $scope.$new(true);
        popupScope.layer = layer;
        var popupHtml = $compile('<track-details-popup></track-details-popup>')(popupScope)[0];
        layer.bindPopup(popupHtml);
        $scope.features.addLayer(layer);
    }

    // $scope.openMapDetailsModal = function() {
    //     var modalInstance;
    //     var modalScope = $scope.$new();

    //     modalScope.model = {
    //         selectedMap: null,
    //         newMapName: null
    //     }

    //     mapDataService.getMaps('{ "fields": {"name": true, "id": true} }').then(function(data) {
    //         modalScope.maps = orderByFilter(data, 'name');
    //         if (typeof $scope.loadedMap !== 'undefined') {
    //             modalScope.model.selectedMap = $scope.loadedMap.id;
    //         } else {
    //             modalScope.model.selectedMap = modalScope.maps[0].id;
    //         }
    //     });

    //     modalScope.loadMap = function() {
    //         mapDataService.getMap(modalScope.model.selectedMap).then(function(res) {
    //             $scope.loadedMap = {
    //                 id: res.id,
    //                 name: res.name
    //             };
                
    //             $scope.features.clearLayers();

    //             L.geoJson(res.data, {
    //                 style: {
    //                     "color": "#F06EAA",
    //                     "weight": 4,
    //                     "opacity": 0.5
    //                 },
    //                 onEachFeature: function(feature, layer) {
    //                     attachPopup(layer);
    //                 }
    //             });

    //             var bounds = leafletBoundsHelpers.createBoundsFromLeaflet($scope.features.getBounds());
    //             $scope.map.bounds = bounds;

    //             modalScope.close();
    //         }).catch(function(){
    //             // TODO: Error handling.
    //         });
    //     };

    //     modalScope.updateMap = function() {
    //         var map = {
    //             data: $scope.features.toGeoJSON()
    //         };

    //         mapDataService.updateMap(modalScope.model.selectedMap, map).then(function(res) {
    //             modalScope.close();
    //         }).catch(function(){
    //             // TODO: Error handling.
    //         });
    //     };

    //     modalScope.createMap = function() {
    //         var map = {
    //             name: modalScope.model.newMapName,
    //             data: $scope.features.toGeoJSON()
    //         };

    //         mapDataService.createMap(map).then(function(res) {
    //             $scope.loadedMap = {
    //                 id: res.id,
    //                 name: res.name
    //             };

    //             modalScope.close();
    //         }).catch(function(){
    //             // TODO: Error handling.
    //         });
    //     }

    //     modalScope.close = function() {
    //         modalInstance.dismiss('cancel');
    //     };      

    //     modalInstance = $uibModal.open({
    //         template: '<map-details-modal></map-details-modal>',
    //         ariaLabelledBy: 'modal-title',
    //         ariaDescribedBy: 'modal-body',
    //         windowClass: 'map-details-modal',
    //         size: 'lg',
    //         scope: modalScope
    //     });
    // };
}