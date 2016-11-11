const angular = require('angular');

require('angular-messages');
require('angular-ui-bootstrap');
require('angular-sanitize');
require('angular-simple-logger');
require('leaflet');
require('leaflet-draw');
require('ui-leaflet');
require('ui-leaflet-draw');

const MapCtrl = require('./components/map/map.controller');
const MapDetailsCtrl = require('./components/mapDetails/mapDetails.controller');
const MapDataService = require('./components/map/map.service');
const MapDirectives = require('./components/map/map.directives');
const MapFilters = require('./components/map/map.filters');
const ModalsCtrl = require('./components/common/modals/modals.controller');
const ModalDirectives = require('./components/common/modals/modals.directives');
const TrackDetailsCtrl = require('./components/map/trackDetails.controller');

const DownloadCtrl = require('./components/download/download.controller');
const DownloadDirectives = require('./components/download/download.directives');

const FormDirectives = require('./components/common/forms/form.directives');
const NavDirectives = require('./components/common/nav/nav.directives');

angular.module('trailsApp', ['nemLogging', 'ngMessages', 'ngSanitize', 'ui-leaflet', 'ui.bootstrap']);

angular.module('trailsApp').controller('MapCtrl', ['$scope', '$compile', 'leafletBoundsHelpers', 'leafletDrawEvents', MapCtrl]);
angular.module('trailsApp').controller('MapDetailsCtrl', ['$scope', '$exceptionHandler', '$sanitize', 'leafletBoundsHelpers', 'mapDataService', 'orderByFilter', MapDetailsCtrl]);
angular.module('trailsApp').controller('ModalsCtrl', ['$scope', '$uibModal', ModalsCtrl]);
angular.module('trailsApp').controller('TrackDetailsCtrl', ['$scope', TrackDetailsCtrl]);
angular.module('trailsApp').filter('beautifyFilter', MapFilters.beautifyFilter);
angular.module('trailsApp').filter('distanceFilter', MapFilters.distanceFilter);
angular.module('trailsApp').factory('mapDataService', MapDataService);
angular.module('trailsApp').directive('trackDetailsPopup', MapDirectives.trackDetailsPopup);
angular.module('trailsApp').directive('mapDetailsModal', ModalDirectives.mapDetailsModal);

angular.module('trailsApp').controller('DownloadCtrl', ['$scope', '$uibModal', DownloadCtrl]);
angular.module('trailsApp').directive('downloadModal', DownloadDirectives.downloadModal);

angular.module('trailsApp').directive('errorMessages', FormDirectives.errorMessages);
angular.module('trailsApp').directive('navigation', NavDirectives.nav);
