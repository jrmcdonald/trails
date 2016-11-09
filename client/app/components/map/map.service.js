module.exports = function MapDataService($http) {
  const BASE_API_URL = 'https://trails.eu-gb.mybluemix.net/api/Maps';

  const getMaps = function getMaps($filter = null) {
    let $filterString = '';

    if ($filter !== null) {
      $filterString = `?filter=${encodeURIComponent($filter)}`;
    }

    return $http.get(`${BASE_API_URL}${$filterString}`).then((response) => {
      return response.data;
    });
  };

  const getMap = function getMap($id, $filter = null) {
    let $filterString = '';

    if ($filter !== null) {
      $filterString = `?filter=${encodeURIComponent($filter)}`;
    }

    return $http.get(`${BASE_API_URL}/${$id}${$filterString}`).then((response) => {
      return response.data;
    });
  };

  const updateMap = function updateMap($id, $data) {
    return $http.put(`${BASE_API_URL}/${$id}`, $data).then((response) => {
      return response.data;
    });
  };

  const createMap = function createMap($data) {
    return $http.post(`${BASE_API_URL}`, $data).then((response) => {
      return response.data;
    });
  };

  return {
    getMaps,
    getMap,
    updateMap,
    createMap,
  };
};
