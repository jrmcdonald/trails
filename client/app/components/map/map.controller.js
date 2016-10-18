module.exports = function($scope, $compile, leafletDrawEvents, mapService) {
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
            attachPopup(layer);

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

    var attachPopup = function(layer) {
        var popupScope = $scope.$new(true);
        popupScope.layer = layer;
        var popupHtml = $compile('<popup></popup>')(popupScope)[0];
        layer.bindPopup(popupHtml);
        $scope.features.addLayer(layer);
    }
}