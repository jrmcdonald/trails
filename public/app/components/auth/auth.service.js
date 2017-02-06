module.exports = function AuthService($http, $window, jwtHelper) {
  const BASE_API_URL = '/api/auth';
  const TOKEN_NAME = 'trails-auth-token';

  const authUser = function authUser($data) {
    return $http.post(`${BASE_API_URL}`, $data, { skipAuthorization: true }).then(response => response.data);
  };

  const putToken = function putToken($token) {
    $window.localStorage[TOKEN_NAME] = $token;
  };

  const getToken = function getToken() {
    return $window.localStorage[TOKEN_NAME];
  };

  const isAuthenticated = function isAuthenticated() {
    const token = getToken();
    let expired = true;

    if (token) {
      expired = jwtHelper.isTokenExpired(token);
    }

    return !expired;
  };

  const getEmail = function getUserEmail() {
    const token = getToken();
    let email = '';

    if (token) {
      const decoded = jwtHelper.decodeToken(token);
      email = decoded.email;
    }

    return email;
  };

  const destroyToken = function destroyToken() {
    $window.localStorage.removeItem(TOKEN_NAME);
  };

  return {
    authUser,
    putToken,
    getToken,
    getEmail,
    isAuthenticated,
    destroyToken,
  };
};
