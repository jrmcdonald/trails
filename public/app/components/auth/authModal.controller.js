module.exports = function AuthModalCtrl($scope, $uibModal) {
  $scope.openAuthModal = function openAuthModal() {
    let modalInstance;

    modalInstance = $uibModal.open({
      template: '<auth-modal ng-controller="AuthCtrl as authCtrl"></auth-modal>',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      windowClass: 'auth-modal',
      size: 'lg',
      scope: $scope,
    });

    $scope.close = function close() {
      modalInstance.dismiss('cancel');
    };
  };
};

