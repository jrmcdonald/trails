const angular = require('angular');

require('angular-jwt');
require('angular-messages');
require('angular-ui-bootstrap');
require('angular-sanitize');
require('angular-simple-logger');
require('leaflet');
require('leaflet-control-geocoder');
require('leaflet-draw');
require('ui-leaflet');
require('ui-leaflet-draw');

const AppConfig = require('./components/common/config/app.config');

const MapCtrl = require('./components/map/map.controller');
const MapDataService = require('./components/map/map.service');
const MapFilters = require('./components/map/map.filters');

const MapDetailsCtrl = require('./components/mapDetails/mapDetails.controller');
const MapDetailsDirectives = require('./components/mapDetails/mapDetails.directives');
const MapDetailsModalCtrl = require('./components/mapDetails/mapDetailsModal.controller');

const TrackDetailsCtrl = require('./components/trackDetails/trackDetails.controller');
const TrackDetailsDirectives = require('./components/trackDetails/trackDetails.directives');
const TrackDetailsService = require('./components/trackDetails/trackDetails.service');
const ElevationService = require('./components/trackDetails/elevation.service');

const DownloadCtrl = require('./components/download/download.controller');
const DownloadDirectives = require('./components/download/download.directives');
const DownloadModalCtrl = require('./components/download/downloadModal.controller');

const AuthCtrl = require('./components/auth/auth.controller');
const AuthDirectives = require('./components/auth/auth.directives');
const AuthService = require('./components/auth/auth.service');
const AuthModalCtrl = require('./components/auth/authModal.controller');
const UserService = require('./components/auth/users.service');

const FormDirectives = require('./components/common/forms/form.directives');

const NavCtrl = require('./components/common/nav/nav.controller');
const NavDirectives = require('./components/common/nav/nav.directives');

angular.module('trailsApp', ['angular-jwt', 'nemLogging', 'ngMessages', 'ngSanitize', 'ui-leaflet', 'ui.bootstrap'])

angular.module('trailsApp').config(AppConfig);

angular.module('trailsApp').controller('MapCtrl', ['$scope', '$compile', 'leafletBoundsHelpers', 'leafletData', 'leafletDrawEvents', MapCtrl]);
angular.module('trailsApp').factory('mapDataService', MapDataService);
angular.module('trailsApp').filter('beautifyFilter', MapFilters.beautifyFilter);
angular.module('trailsApp').filter('distanceFilter', MapFilters.distanceFilter);
angular.module('trailsApp').filter('elevationFilter', MapFilters.elevationFilter);
angular.module('trailsApp').filter('minutesFilter', MapFilters.minutesFilter);

angular.module('trailsApp').controller('MapDetailsCtrl', ['$scope', '$exceptionHandler', '$sanitize', 'leafletBoundsHelpers', 'mapDataService', 'orderByFilter', MapDetailsCtrl]);
angular.module('trailsApp').directive('mapDetailsModal', MapDetailsDirectives.mapDetailsModal);
angular.module('trailsApp').controller('MapDetailsModalCtrl', ['$scope', '$uibModal', MapDetailsModalCtrl]);

angular.module('trailsApp').controller('TrackDetailsCtrl', ['$scope', '$exceptionHandler', 'authService', 'trackDetailsService', TrackDetailsCtrl]);
angular.module('trailsApp').directive('trackDetailsPopup', TrackDetailsDirectives.trackDetailsPopup);
angular.module('trailsApp').factory('trackDetailsService', ['elevationService', TrackDetailsService]);
angular.module('trailsApp').factory('elevationService', ElevationService);

angular.module('trailsApp').controller('DownloadCtrl', ['$scope', DownloadCtrl]);
angular.module('trailsApp').directive('downloadModal', DownloadDirectives.downloadModal);
angular.module('trailsApp').controller('DownloadModalCtrl', ['$scope', '$uibModal', DownloadModalCtrl]);

angular.module('trailsApp').controller('AuthCtrl', ['$scope', '$exceptionHandler', '$sanitize', 'authService', 'userService', AuthCtrl]);
angular.module('trailsApp').directive('authModal', AuthDirectives.authModal);
angular.module('trailsApp').controller('AuthModalCtrl', ['$scope', '$uibModal', AuthModalCtrl]);
angular.module('trailsApp').factory('authService', ['$http', '$window', 'jwtHelper', AuthService]);
angular.module('trailsApp').factory('userService', UserService);

angular.module('trailsApp').directive('errorMessages', FormDirectives.errorMessages);

angular.module('trailsApp').controller('NavCtrl', ['$scope', 'authService', NavCtrl]);
angular.module('trailsApp').directive('navigation', NavDirectives.nav);
