module.exports = function MapDetailsCtrl($scope, $exceptionHandler, $uibModal, $sanitize, leafletBoundsHelpers, mapDataService, orderByFilter) {
  function logResponseException(response) {
    $exceptionHandler(new Error(`An unexpected API error occurred: ${response.config.method} ${response.config.url} ${response.status}`));
  }

  $scope.openMapDetailsModal = function openMapDetailsModal() {
    let modalInstance;
    const modalScope = $scope.$new();

    modalScope.model = {
      selectedMap: null,
      newMapName: null,
    };

    modalScope.state = {
      error: false,
      creating: false,
      loading: false,
      updating: false,
    };

    mapDataService.getMaps('{ "fields": {"name": true, "id": true} }').then((data) => {
      modalScope.maps = orderByFilter(data, 'name');
      if (typeof $scope.$parent.loadedMap !== 'undefined') {
        modalScope.model.selectedMap = $scope.$parent.loadedMap.id;
      } else {
        modalScope.model.selectedMap = modalScope.maps[0].id;
      }
    });

    modalScope.loadMap = function loadMap() {
      modalScope.resetError();
      modalScope.state.loading = true;

      mapDataService.getMap(modalScope.model.selectedMap).then((res) => {
        $scope.$parent.loadedMap = {
          id: res.id,
          name: res.name,
        };

        $scope.$parent.features.clearLayers();

        if (res.data.features.length > 0) {
          L.geoJson(res.data, {
            style: {
              color: '#F06EAA',
              weight: 4,
              opacity: 0.5,
            },
            onEachFeature(feature, layer) {
              $scope.$parent.attachPopup(layer);
              $scope.$parent.features.addLayer(layer);
            },
          });

          const featureBounds = $scope.$parent.features.getBounds();
          const mapBounds = leafletBoundsHelpers.createBoundsFromLeaflet(featureBounds);
          $scope.$parent.map.bounds = mapBounds;
        }

        modalScope.state.loading = false;
        modalScope.close();
      }).catch((res) => {
        logResponseException(res);
        modalScope.state.error = true;
        modalScope.state.loading = false;
      });
    };

    modalScope.updateMap = function updateMap() {
      modalScope.resetError();
      modalScope.state.updating = true;

      const map = {
        data: $scope.$parent.features.toGeoJSON(),
      };

      mapDataService.updateMap(modalScope.model.selectedMap, map).then(() => {
        modalScope.state.updating = false;
        modalScope.close();
      }).catch((res) => {
        logResponseException(res);
        modalScope.state.error = true;
        modalScope.state.updating = false;
      });
    };

    modalScope.createMap = function createMap() {
      modalScope.resetError();
      modalScope.state.creating = true;

      const map = {
        name: $sanitize(modalScope.model.newMapName),
        data: $scope.$parent.features.toGeoJSON(),
      };

      mapDataService.createMap(map).then((res) => {
        $scope.$parent.loadedMap = {
          id: res.id,
          name: res.name,
        };

        modalScope.state.creating = false;
        modalScope.close();
      }).catch((res) => {
        logResponseException(res);
        modalScope.state.error = true;
        modalScope.state.creating = false;
      });
    };

    modalScope.close = function close() {
      modalInstance.dismiss('cancel');
    };

    modalScope.resetError = function resetError() {
      modalScope.state.error = false;
    };

    modalInstance = $uibModal.open({
      template: '<map-details-modal></map-details-modal>',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      windowClass: 'map-details-modal',
      size: 'lg',
      scope: modalScope,
    });
  };
};