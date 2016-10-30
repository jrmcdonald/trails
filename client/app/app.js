const angular = require('angular');

require('angular-messages');
require('angular-ui-bootstrap');
require('angular-simple-logger');
require('leaflet');
require('leaflet-draw');
require('ui-leaflet');
require('ui-leaflet-draw');

const MapCtrl = require('./components/map/map.controller');
const MapDetailsCtrl = require('./components/map/details.controller');
const MapFilters = require('./components/map/map.filters');
const MapDataService = require('./components/map/map.service');
const MapDirectives = require('./components/map/map.directives');

const DownloadCtrl = require('./components/download/download.controller');
const DownloadDirectives = require('./components/download/download.directives');

const FormDirectives = require('./components/common/forms/form.directives');
const NavDirectives = require('./components/common/nav/nav.directives');

angular.module('trailsApp', ['nemLogging', 'ngMessages', 'ui-leaflet', 'ui.bootstrap']);

angular.module('trailsApp').controller('MapCtrl', ['$scope', '$compile', 'leafletBoundsHelpers', 'leafletDrawEvents', MapCtrl]);
angular.module('trailsApp').controller('MapDetailsCtrl', ['$scope', '$uibModal', 'leafletBoundsHelpers', 'mapDataService', 'orderByFilter', MapDetailsCtrl]);
angular.module('trailsApp').filter('beautifyFilter', MapFilters.beautifyFilter);
angular.module('trailsApp').factory('mapDataService', MapDataService);
angular.module('trailsApp').directive('trackDetailsPopup', MapDirectives.trackDetailsPopup);
angular.module('trailsApp').directive('mapDetailsModal', MapDirectives.mapDetailsModal);

angular.module('trailsApp').controller('DownloadCtrl', ['$scope', '$uibModal', DownloadCtrl]);
angular.module('trailsApp').directive('downloadModal', DownloadDirectives.downloadModal);

angular.module('trailsApp').directive('errorMessages', FormDirectives.errorMessages);
angular.module('trailsApp').directive('navigation', NavDirectives.nav);
