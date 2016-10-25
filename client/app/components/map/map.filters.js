var Utils = require('../common/utils/index');

exports.beautifyFilter = function() {
    return function(input, format) {
        return (input instanceof L.FeatureGroup) ? Utils.dataTypes[format].output(input, true) : '';
    }
}