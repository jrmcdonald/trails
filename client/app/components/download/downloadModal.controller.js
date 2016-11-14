module.exports = function DownloadModalCtrl($scope, $uibModal) {
  $scope.openDownloadModal = function openDownloadModal() {
    let modalInstance;

    modalInstance = $uibModal.open({
      template: '<download-modal ng-controller="DownloadCtrl"></download-modal>',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      windowClass: 'download-modal',
      size: 'lg',
      scope: $scope,
    });

    $scope.close = function close() {
      modalInstance.dismiss('cancel');
    };
  };
};
