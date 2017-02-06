module.exports = function NavCtrl($scope, authService) {
  const vm = this;

  vm.getEmail = authService.getEmail;
  vm.isAuthenticated = authService.isAuthenticated;
  vm.logout = authService.destroyToken;
};
