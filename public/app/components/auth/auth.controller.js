module.exports = function AuthCtrl($scope, $exceptionHandler, $sanitize, authService, userService) {
  const vm = this;

  vm.credentials = {
    login: {
      email: '',
      password: '',
    },
    register: {
      email: '',
      password: '',
    },
  };

  vm.state = {
    authenticating: false,
    registering: false,
  };

  vm.alerts = [];

  const logResponseException = function logResponseException(response) {
    $exceptionHandler(new Error(`An unexpected API error occurred: ${response.config.method} ${response.config.url} ${response.status}`));
  };

  vm.isBusy = function isBusy() {
    return vm.state.authenticating || vm.state.registering;
  };

  vm.registerUser = function registerUser() {
    vm.clearAlerts();
    vm.state.registering = true;

    const data = {
      email: $sanitize(vm.credentials.register.email),
      password: $sanitize(vm.credentials.register.password),
    };

    userService.createUser(data).then(() => {
      vm.credentials.register.email = '';
      vm.credentials.register.password = '';

      vm.registerForm.$setPristine();
      vm.registerForm.$setUntouched();

      vm.alerts.push({ type: 'success', msg: 'Registration complete, please login.' });
      vm.state.registering = false;
    }).catch((err) => {
      if (err.status === 409) {
        vm.alerts.push({ type: 'danger', msg: 'An account with that email address already exists. Please choose another.' });
      } else {
        logResponseException(err);
        vm.alerts.push({ type: 'danger', msg: 'An error occurred completing your request. Please try again.' });
      }

      vm.state.registering = false;
    });
  };

  vm.authenticateUser = function authenticateUser() {
    vm.clearAlerts();
    vm.state.authenticating = true;

    const data = {
      email: $sanitize(vm.credentials.login.email),
      password: $sanitize(vm.credentials.login.password),
    };

    authService.authUser(data).then((res) => {
      authService.putToken(res.data.token);

      vm.credentials.login.email = '';
      vm.credentials.login.password = '';

      vm.loginForm.$setPristine();
      vm.loginForm.$setUntouched();

      vm.alerts.push({ type: 'success', msg: 'You have logged in successfully.' });
      vm.state.authenticating = false;
    }).catch((err) => {
      console.log(err);
      if (err.status === 403) {
        vm.alerts.push({ type: 'danger', msg: 'Please enter a valid email address and password combination.' });
      } else {
        logResponseException(err);
        vm.alerts.push({ type: 'danger', msg: 'An error occurred completing your request. Please try again.' });
      }

      vm.state.authenticating = false;
    });
  };

  vm.clearAlerts = function clearAlerts() {
    vm.alerts = [];
  };

  vm.closeAlert = function closeAlert(index) {
    vm.alerts.splice(index, 1);
  };
};
