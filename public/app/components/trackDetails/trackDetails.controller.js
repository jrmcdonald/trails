const Utils = require('../common/utils/index');

module.exports = function TrackDetailsCtrl($scope, TrackDetailsService) {
  let title = '';

  $scope.editing = false;
  $scope.distance = Utils.getDistance($scope.layer);

  TrackDetailsService.getElevationGain($scope.layer).then((elevationGain) => {
    $scope.elevationGain = elevationGain;
    $scope.walkingTime = TrackDetailsService.getWalkingTime($scope.distance, $scope.elevationGain);
  }).catch((err) => {
    // TODO: better error handling here.
    $scope.elevationGain = 0;
  });

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
