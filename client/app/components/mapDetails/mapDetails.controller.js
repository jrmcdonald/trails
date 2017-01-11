module.exports = function MapDetailsCtrl($scope, $exceptionHandler, $sanitize, leafletBoundsHelpers, mapDataService, orderByFilter) {
  const $grandParentScope = $scope.$parent.$parent;

  $scope.model = {
    selectedMap: null,
    newMapName: null,
  };

  $scope.state = {
    creating: false,
    deleting: false,
    loading: false,
    updating: false,
  };

  $scope.alerts = [];

  const logResponseException = function logResponseException(response) {
    $exceptionHandler(new Error(`An unexpected API error occurred: ${response.config.method} ${response.config.url} ${response.status}`));
  };

  const loadMaps = function loadMaps() {
    mapDataService.getMaps('{ "fields": {"name": true, "id": true} }').then((data) => {
      if (data.length > 0) {
        $scope.maps = orderByFilter(data, 'name');
        if (typeof $grandParentScope.loadedMap !== 'undefined' && $grandParentScope.loadedMap !== null) {
          $scope.model.selectedMap = $grandParentScope.loadedMap.id;
        } else {
          $scope.model.selectedMap = $scope.maps[0].id;
        }
      }
    });
  };

  $scope.isBusy = function isBusy() {
    return $scope.state.creating || $scope.state.deleting || $scope.state.loading || $scope.state.updating;
  };

  $scope.loadMap = function loadMap() {
    $scope.clearAlerts();
    $scope.state.loading = true;

    mapDataService.getMap($scope.model.selectedMap).then((res) => {
      $grandParentScope.loadedMap = {
        id: res.id,
        name: res.name,
      };

      $grandParentScope.features.clearLayers();

      if (res.data.features.length > 0) {
        L.geoJson(res.data, {
          style: {
            color: '#F06EAA',
            weight: 4,
            opacity: 0.5,
          },
          onEachFeature(feature, layer) {
            $grandParentScope.attachPopup(layer);
            $grandParentScope.features.addLayer(layer);
          },
        });

        const featureBounds = $grandParentScope.features.getBounds();
        const mapBounds = leafletBoundsHelpers.createBoundsFromLeaflet(featureBounds);
        $grandParentScope.map.bounds = mapBounds;
      }

      loadMaps();

      $scope.alerts.push({ type: 'success', msg: 'Map loaded successfully.' });
      $scope.state.loading = false;
    }).catch((res) => {
      logResponseException(res);

      $scope.alerts.push({ type: 'danger', msg: 'An error occurred completing your request. Please try again.' });
      $scope.state.loading = false;
    });
  };

  $scope.updateMap = function updateMap() {
    $scope.clearAlerts();
    $scope.state.updating = true;

    const map = {
      data: $grandParentScope.features.toGeoJSON(),
    };

    mapDataService.updateMap($scope.model.selectedMap, map).then(() => {
      loadMaps();

      $scope.alerts.push({ type: 'success', msg: 'Map updated successfully.' });
      $scope.state.updating = false;
    }).catch((res) => {
      logResponseException(res);

      $scope.alerts.push({ type: 'danger', msg: 'An error occurred completing your request. Please try again.' });
      $scope.state.updating = false;
    });
  };

  $scope.deleteMap = function deleteMap() {
    $scope.clearAlerts();
    $scope.deleting = true;

    $grandParentScope.loadedMap = null;

    mapDataService.deleteMap($scope.model.selectedMap).then(() => {
      loadMaps();

      $grandParentScope.features.clearLayers();

      $scope.alerts.push({ type: 'success', msg: 'Map deleted successfully.' });
      $scope.state.deleting = false;
    }).catch((res) => {
      logResponseException(res);

      $scope.alerts.push({ type: 'danger', msg: 'An error occurred completing your request. Please try again.' });
      $scope.state.deleting = false;
    });
  };

  $scope.createMap = function createMap() {
    $scope.clearAlerts();
    $scope.state.creating = true;

    const map = {
      name: $sanitize($scope.model.newMapName),
      data: $grandParentScope.features.toGeoJSON(),
    };

    mapDataService.createMap(map).then((res) => {
      $grandParentScope.loadedMap = {
        id: res.id,
        name: res.name,
      };

      loadMaps();

      $scope.model.newMapName = '';
      $scope.mapCreateForm.$setPristine();
      $scope.mapCreateForm.$setUntouched();

      $scope.alerts.push({ type: 'success', msg: 'Map created successfully.' });
      $scope.state.creating = false;
    }).catch((res) => {
      logResponseException(res);

      $scope.alerts.push({ type: 'danger', msg: 'An error occurred completing your request. Please try again.' });
      $scope.state.creating = false;
    });
  };

  $scope.clearAlerts = function clearAlerts() {
    $scope.alerts = [];
  };

  $scope.closeAlert = function closeAlert(index) {
    $scope.alerts.splice(index, 1);
  };

  loadMaps();
};
