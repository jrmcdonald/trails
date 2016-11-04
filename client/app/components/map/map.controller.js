module.exports = function MapCtrl($scope, $compile, leafletBoundsHelpers, leafletDrawEvents) {
  $scope.features = new L.FeatureGroup();

  // TODO: Make this configurable
  $scope.metric = true;

  const bounds = leafletBoundsHelpers.createBoundsFromArray([
        [53.0685, -4.0763],
        [53.0685, -4.0763],
  ]);

  // Set up ui-leaflet and ui-leaflet-draw options
  angular.extend($scope, {
    map: {
      bounds,
      center: {},
      defaults: {
        maxZoom: 18,
        minZoom: 1,
        closePopupOnClick: false,
        tileLayer: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicXd5Y2siLCJhIjoiY2lzeXhqa3Z6MDA1MDJ6bzN2MXY2eHh0bSJ9.iAPf9IhnK6N7MrkIM_3pJA',
        tileLayerOptions: {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        },
      },
      drawOptions: {
        draw: {
          polyline: {
            metric: $scope.metric,
          },
          polygon: false,
          rectangle: false,
          circle: false,
          marker: false,
        },
        edit: {
          featureGroup: $scope.features,
        },
      },
    },
  });

  // Handle leafletDrawEvents
  const handle = {
    created(e, leafletEvent, leafletObject, model, modelName) {
      const layer = leafletEvent.layer;

      // Create & bind popup template to the newly created layer
      $scope.attachPopup(layer);

      // http://stackoverflow.com/a/35819611
      const feature = layer.feature = layer.feature || {};
      feature.type = 'Feature';
      feature.properties = feature.properties || {};
      feature.properties.name = `Random${Math.floor(Math.random() * 1000)}`;

      $scope.features.addLayer(layer);
    },
    edited() {},
    deleted() {},
    drawstart() {},
    drawstop() {},
    editstart() {},
    editstop() {},
    deletestart() {},
    deletestop() {},
  };

  const drawEvents = leafletDrawEvents.getAvailableEvents();

  drawEvents.forEach((eventName) => {
    $scope.$on(`leafletDirectiveDraw.${eventName}`, (e, payload) => {
      const leafletEvent = payload.leafletEvent;
      const leafletObject = payload.leafletObject;
      const model = payload.model;
      const modelName = payload.modelName;

      handle[eventName.replace('draw:', '')](e, leafletEvent, leafletObject, model, modelName);
    });
  });

  $scope.attachPopup = function attachPopup(layer) {
    const popupScope = $scope.$new(true);
    popupScope.layer = layer;
    const popupHtml = $compile('<track-details-popup></track-details-popup>')(popupScope)[0];
    layer.bindPopup(popupHtml);
  };
};
