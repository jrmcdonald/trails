module.exports = function($http) {
    var getMaps = function($filter = null) {
        let $filterString = '';
        
        if ($filter !== null) {
            $filterString = '?filter=' + encodeURIComponent($filter);
        }

        return $http.get('http://trails.eu-gb.mybluemix.net/api/Maps' + $filterString).then(function(response) {
            return response.data;
        });
    };

    var getMap = function($id, $filter = null) {
        let $filterString = '';
        
        if ($filter !== null) {
            $filterString = '?filter=' + encodeURIComponent($filter);
        }

        return $http.get('http://trails.eu-gb.mybluemix.net/api/Maps/' + $id + $filterString).then(function(response) {
            return response.data;
        });
    };

    var updateMap = function($id, $data) {
        return $http.put('http://trails.eu-gb.mybluemix.net/api/Maps/' + $id, $data).then(function(response) {
            return response.data;
        });
    };

    var createMap = function($data) {
        return $http.post('http://trails.eu-gb.mybluemix.net/api/Maps', $data).then(function(response) {
            return response.data;
        });
    }

    return {
        getMaps: getMaps,
        getMap: getMap,
        updateMap: updateMap,
        createMap: createMap
    };
}