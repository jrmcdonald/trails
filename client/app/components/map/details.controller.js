module.exports = function($scope, $uibModal, leafletBoundsHelpers, mapDataService, orderByFilter) {
    $scope.openMapDetailsModal = function() {
        var modalInstance;
        var modalScope = $scope.$new();

        modalScope.model = {
            selectedMap: null,
            newMapName: null
        }

        mapDataService.getMaps('{ "fields": {"name": true, "id": true} }').then(function(data) {
            modalScope.maps = orderByFilter(data, 'name');
            if (typeof $scope.$parent.loadedMap !== 'undefined') {
                modalScope.model.selectedMap = $scope.$parent.loadedMap.id;
            } else {
                modalScope.model.selectedMap = modalScope.maps[0].id;
            }
        });

        modalScope.loadMap = function() {
            mapDataService.getMap(modalScope.model.selectedMap).then(function(res) {
                $scope.$parent.loadedMap = {
                    id: res.id,
                    name: res.name
                };
                
                $scope.$parent.features.clearLayers();

                L.geoJson(res.data, {
                    style: {
                        "color": "#F06EAA",
                        "weight": 4,
                        "opacity": 0.5
                    },
                    onEachFeature: function(feature, layer) {
                        $scope.$parent.attachPopup(layer);
                    }
                });

                var bounds = leafletBoundsHelpers.createBoundsFromLeaflet($scope.$parent.features.getBounds());
                $scope.$parent.map.bounds = bounds;

                modalScope.close();
            }).catch(function(){
                // TODO: Error handling.
            });
        };

        modalScope.updateMap = function() {
            var map = {
                data: $scope.$parent.features.toGeoJSON()
            };

            mapDataService.updateMap(modalScope.model.selectedMap, map).then(function(res) {
                modalScope.close();
            }).catch(function(){
                // TODO: Error handling.
            });
        };

        modalScope.createMap = function() {
            var map = {
                name: modalScope.model.newMapName,
                data: $scope.$parent.features.toGeoJSON()
            };

            mapDataService.createMap(map).then(function(res) {
                $scope.$parent.loadedMap = {
                    id: res.id,
                    name: res.name
                };

                modalScope.close();
            }).catch(function(){
                // TODO: Error handling.
            });
        }

        modalScope.close = function() {
            modalInstance.dismiss('cancel');
        };      

        modalInstance = $uibModal.open({
            template: '<map-details-modal></map-details-modal>',
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            windowClass: 'map-details-modal',
            size: 'lg',
            scope: modalScope
        });
    };
}