module.exports = function($http) {
    var getMaps = function() {
        return $http.get('http://trails.eu-gb.mybluemix.net/api/Maps').then(function(response) {
            return response.data;
        });
    };

    return {
        getMaps: getMaps
    };
}