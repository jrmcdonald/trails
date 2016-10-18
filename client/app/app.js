var angular = require('angular');
var bootstrap = require('angular-ui-bootstrap');
var nemLogging = require('angular-simple-logger');
var leaflet = require('leaflet');
var leafletDraw = require('leaflet-draw');
var uiLeaflet = require('ui-leaflet');
var uiLeafletDraw = require('ui-leaflet-draw');

var MapCtrl = require('./components/map/map.controller');
var MapFilters = require('./components/map/map.filters');
var MapService = require('./components/map/map.service.js');
var MapDirectives = require('./components/map/map.directives');

var ExportCtrl = require('./components/export/export.controller');
var ExportDirectives = require('./components/export/export.directives')

var NavDirectives = require('./components/common/nav/nav.directives');

angular.module('trails', ['nemLogging', 'ui-leaflet', 'ui.bootstrap']);

angular.module('trails').controller("mapCtrl", ['$scope', '$compile', 'leafletDrawEvents', 'mapService', MapCtrl]);
angular.module('trails').filter('formatFeatures', MapFilters.formatFeatures);
angular.module('trails').factory('mapService', MapService);
angular.module('trails').directive('popup', MapDirectives.popup);

angular.module('trails').controller('exportCtrl', ['$scope', '$uibModal', ExportCtrl]);
angular.module('trails').directive('export', ExportDirectives.modal);

angular.module('trails').directive('navigation', NavDirectives.nav);