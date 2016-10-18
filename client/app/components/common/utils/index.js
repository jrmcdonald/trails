var togpx = require('togpx');
var tokml = require('tokml');
var vkbeautify = require('vkbeautify');

exports.dataTypes = {
    json: {
        ext: "json",
        mime: "application/json",
        output: function(input, beautify = false) {
            var data = JSON.stringify(input.toGeoJSON());
            return (beautify) ? vkbeautify.json(data) : data;
        }
    },
    gpx: {
        ext: "gpx",
        mime: "application/gpx+xml",
        output: function(input, beautify = false) {
            var data = togpx(input.toGeoJSON());
            return (beautify) ? vkbeautify.xml(data) : data;
        }
    },
    kml: {
        ext: "kml",
        mime: "application/vnd.google-earth.kml+xml",
        output: function(input, beautify = false) {
            var data = tokml(input.toGeoJSON());
            return (beautify) ? vkbeautify.xml(data) : data;
        }
    }
}