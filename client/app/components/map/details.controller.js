module.exports = function MapDetailsCtrl($scope, $uibModal, leafletBoundsHelpers, mapDataService, orderByFilter) {
  $scope.openMapDetailsModal = function openMapDetailsModal() {
    let modalInstance;
    const modalScope = $scope.$new();

    modalScope.model = {
      selectedMap: null,
      newMapName: null,
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
      mapDataService.getMap(modalScope.model.selectedMap).then((res) => {
        $scope.$parent.loadedMap = {
          id: res.id,
          name: res.name,
        };

        $scope.$parent.features.clearLayers();

        L.geoJson(res.data, {
          style: {
            color: '#F06EAA',
            weight: 4,
            opacity: 0.5,
          },
          onEachFeature(feature, layer) {
            $scope.$parent.attachPopup(layer);
          },
        });

        const featureBounds = $scope.$parent.features.getBounds();
        const mapBounds = leafletBoundsHelpers.createBoundsFromLeaflet(featureBounds);
        $scope.$parent.map.bounds = mapBounds;

        modalScope.close();
      }).catch(() => {
        // TODO: Error handling.
      });
    };

    modalScope.updateMap = function updateMap() {
      const map = {
        data: $scope.$parent.features.toGeoJSON(),
      };

      mapDataService.updateMap(modalScope.model.selectedMap, map).then(() => {
        modalScope.close();
      }).catch(() => {
        // TODO: Error handling.
      });
    };

    modalScope.createMap = function createMap() {
      const map = {
        name: modalScope.model.newMapName,
        data: $scope.$parent.features.toGeoJSON(),
      };

      mapDataService.createMap(map).then((res) => {
        $scope.$parent.loadedMap = {
          id: res.id,
          name: res.name,
        };

        modalScope.close();
      }).catch(() => {
        // TODO: Error handling.
      });
    };

    modalScope.close = function close() {
      modalInstance.dismiss('cancel');
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
