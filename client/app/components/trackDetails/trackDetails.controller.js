const Utils = require('../common/utils/index');

module.exports = function TrackDetailsCtrl($scope) {
  let title = '';

  $scope.editing = false;
  $scope.distance = Utils.getDistance($scope.layer);

  $scope.edit = function edit() {
    $scope.editing = true;
    title = angular.copy($scope.layer.feature.properties.name);
  };

  $scope.reset = function reset() {
    $scope.editing = false;
    $scope.layer.feature.properties.name = angular.copy(title);
  };

  $scope.save = function save() {
    $scope.editing = false;
  };
};
