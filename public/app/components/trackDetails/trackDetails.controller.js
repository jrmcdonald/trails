const Utils = require('../common/utils/index');

module.exports = function TrackDetailsCtrl($scope, $exceptionHandler, AuthService, TrackDetailsService) {
  const vm = this;
  let title = '';

  vm.isAuthenticated = AuthService.isAuthenticated;
  vm.editing = false;
  vm.distance = 0;
  vm.elevationGain = 0;
  vm.walkingTime = 0;

  const logResponseException = function logResponseException(response) {
    $exceptionHandler(new Error(`An unexpected API error occurred: ${response.config.method} ${response.config.url} ${response.status}`));
  };

  const refresh = function refresh() {
    vm.distance = Utils.getDistance($scope.layer);

    if (vm.isAuthenticated()) {
      TrackDetailsService.getElevationGain($scope.layer).then((elevationGain) => {
        vm.elevationGain = elevationGain;
        vm.walkingTime = TrackDetailsService.getWalkingTime(vm.distance, vm.elevationGain);
      }).catch((err) => {
        logResponseException(err);
      });
    }
  };

  vm.edit = function edit() {
    vm.editing = true;
    title = angular.copy($scope.layer.feature.properties.name);
  };

  vm.reset = function reset() {
    vm.editing = false;
    $scope.layer.feature.properties.name = angular.copy(title);
  };

  vm.save = function save() {
    vm.editing = false;
  };

  refresh();
};
