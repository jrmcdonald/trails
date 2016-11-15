const Utils = require('../common/utils/index');

exports.beautifyFilter = function beautifyFilter() {
  return function (input, format) {
    return (input instanceof L.FeatureGroup) ? Utils.dataTypes[format].output(input, true) : '';
  };
};

exports.distanceFilter = function distanceFilter($filter) {
  return function (distance, metric = false) {
    const unit = (metric) ? 'km' : 'mi';

    if (metric) {
      distance /= 1000;
    } else {
      distance /= 1609.34;
    }

    distance = $filter('number')(distance, 4);

    return `${distance} ${unit}`;
  };
};

exports.elevationFilter = function elevationFilter($filter) {
  return function (elevation, metric = false) {
    const unit = (metric) ? 'm' : 'ft';

    if (!metric) {
      elevation *= 3.28084;
    }

    elevation = $filter('number')(elevation, 0);

    return `${elevation} ${unit}`;
  };
};
