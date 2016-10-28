module.exports = function MapDataService($http) {
  const getMaps = function getMaps($filter = null) {
    let $filterString = '';

    if ($filter !== null) {
      $filterString = `?filter=${encodeURIComponent($filter)}`;
    }

    return $http.get(`http://trails.eu-gb.mybluemix.net/api/Maps${$filterString}`).then((response) => {
      return response.data;
    });
  };

  const getMap = function getMap($id, $filter = null) {
    let $filterString = '';

    if ($filter !== null) {
      $filterString = `?filter=${encodeURIComponent($filter)}`;
    }

    return $http.get(`http://trails.eu-gb.mybluemix.net/api/Maps/${$id}${$filterString}`).then((response) => {
      return response.data;
    });
  };

  const updateMap = function updateMap($id, $data) {
    return $http.put(`http://trails.eu-gb.mybluemix.net/api/Maps/${$id}`, $data).then((response) => {
      return response.data;
    });
  };

  const createMap = function createMap($data) {
    return $http.post('http://trails.eu-gb.mybluemix.net/api/Maps', $data).then((response) => {
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
