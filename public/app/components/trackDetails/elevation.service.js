module.exports = function ElevationsService($http) {
  const BASE_API_URL = 'http://localhost:3000/api/elevations';

  const getPoints = function getPoints(points) {
    const pointString = points.map(point => `${point.lat},${point.lng}`).join(',');

    return $http.get(`${BASE_API_URL}/List?points=${pointString}`)
                  .then(response => response.data);
  };

  return {
    getPoints,
  };
};
