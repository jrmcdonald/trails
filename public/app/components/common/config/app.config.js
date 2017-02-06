module.exports = function Config($httpProvider, jwtOptionsProvider) {
  jwtOptionsProvider.config({
    authPrefix: 'JWT ',
    tokenGetter: ['authService', authService => authService.getToken()],
  });

  $httpProvider.interceptors.push('jwtInterceptor');
};
