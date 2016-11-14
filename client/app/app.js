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
const MapDataService = require('./components/map/map.service');
const MapFilters = require('./components/map/map.filters');

const MapDetailsCtrl = require('./components/mapDetails/mapDetails.controller');
const MapDetailsDirectives = require('./components/mapDetails/mapDetails.directives');
const MapDetailsModalCtrl = require('./components/mapDetails/mapDetailsModal.controller');

const TrackDetailsCtrl = require('./components/trackDetails/trackDetails.controller');
const TrackDetailsDirectives = require('./components/trackDetails/trackDetails.directives');

const DownloadCtrl = require('./components/download/download.controller');
const DownloadDirectives = require('./components/download/download.directives');
const DownloadModalCtrl = require('./components/download/downloadModal.controller');

const FormDirectives = require('./components/common/forms/form.directives');
const NavDirectives = require('./components/common/nav/nav.directives');

angular.module('trailsApp', ['nemLogging', 'ngMessages', 'ngSanitize', 'ui-leaflet', 'ui.bootstrap']);

angular.module('trailsApp').controller('MapCtrl', ['$scope', '$compile', 'leafletBoundsHelpers', 'leafletDrawEvents', MapCtrl]);
angular.module('trailsApp').factory('mapDataService', MapDataService);
angular.module('trailsApp').filter('beautifyFilter', MapFilters.beautifyFilter);
angular.module('trailsApp').filter('distanceFilter', MapFilters.distanceFilter);

angular.module('trailsApp').controller('MapDetailsCtrl', ['$scope', '$exceptionHandler', '$sanitize', 'leafletBoundsHelpers', 'mapDataService', 'orderByFilter', MapDetailsCtrl]);
angular.module('trailsApp').directive('mapDetailsModal', MapDetailsDirectives.mapDetailsModal);
angular.module('trailsApp').controller('MapDetailsModalCtrl', ['$scope', '$uibModal', MapDetailsModalCtrl]);

angular.module('trailsApp').controller('TrackDetailsCtrl', ['$scope', TrackDetailsCtrl]);
angular.module('trailsApp').directive('trackDetailsPopup', TrackDetailsDirectives.trackDetailsPopup);

angular.module('trailsApp').controller('DownloadCtrl', ['$scope', DownloadCtrl]);
angular.module('trailsApp').directive('downloadModal', DownloadDirectives.downloadModal);
angular.module('trailsApp').controller('DownloadModalCtrl', ['$scope', '$uibModal', DownloadModalCtrl]);

angular.module('trailsApp').directive('errorMessages', FormDirectives.errorMessages);
angular.module('trailsApp').directive('navigation', NavDirectives.nav);
