module.exports = function MapDetailsModalCtrl($scope, $uibModal) {
  $scope.openMapDetailsModal = function openMapDetailsModal() {
    let modalInstance;

    modalInstance = $uibModal.open({
      template: '<map-details-modal ng-controller="MapDetailsCtrl"></map-details-modal>',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      windowClass: 'map-details-modal',
      size: 'lg',
      scope: $scope,
    });

    $scope.close = function close() {
      modalInstance.dismiss('cancel');
    };
  };
};
