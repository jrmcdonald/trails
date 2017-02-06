module.exports = function AuthService($http) {
  const BASE_API_URL = '/api/users';

  const createUser = function createUser($data) {
    return $http.post(`${BASE_API_URL}`, $data, { skipAuthorization: true }).then(response => response.data);
  };

  return {
    createUser,
  };
};
