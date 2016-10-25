var angular = require('angular');
var bootstrap = require('angular-ui-bootstrap');
var nemLogging = require('angular-simple-logger');
var leaflet = require('leaflet');
var leafletDraw = require('leaflet-draw');
var uiLeaflet = require('ui-leaflet');
var uiLeafletDraw = require('ui-leaflet-draw');

var MapCtrl = require('./components/map/map.controller');
var MapDetailsCtrl = require('./components/map/details.controller');
var MapFilters = require('./components/map/map.filters');
var MapDataService = require('./components/map/map.service');
var MapDirectives = require('./components/map/map.directives');

var DownloadCtrl = require('./components/download/download.controller');
var DownloadDirectives = require('./components/download/download.directives');

var NavDirectives = require('./components/common/nav/nav.directives');

angular.module('trailsApp', ['nemLogging', 'ui-leaflet', 'ui.bootstrap']);

angular.module('trailsApp').controller("MapCtrl", ['$scope', '$compile', 'leafletBoundsHelpers', 'leafletDrawEvents', MapCtrl]);
angular.module('trailsApp').controller("MapDetailsCtrl", ['$scope', '$uibModal', 'leafletBoundsHelpers', 'mapDataService', 'orderByFilter', MapDetailsCtrl]);
angular.module('trailsApp').filter('beautifyFilter', MapFilters.beautifyFilter);
angular.module('trailsApp').factory('mapDataService', MapDataService);
angular.module('trailsApp').directive('trackDetailsPopup', MapDirectives.trackDetailsPopup);
angular.module('trailsApp').directive('mapDetailsModal', MapDirectives.mapDetailsModal);

angular.module('trailsApp').controller('DownloadCtrl', ['$scope', '$uibModal', DownloadCtrl]);
angular.module('trailsApp').directive('downloadModal', DownloadDirectives.downloadModal);

angular.module('trailsApp').directive('navigation', NavDirectives.nav);