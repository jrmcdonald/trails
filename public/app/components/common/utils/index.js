const togpx = require('togpx');
const tokml = require('tokml');
const vkbeautify = require('vkbeautify');

exports.getDistance = function getDistance(path) {
  let distance = 0;
  const latlngs = path.getLatLngs();

  for (let i = 1; i < latlngs.length; i += 1) {
    distance += latlngs[i].distanceTo(latlngs[i - 1]);
  }

  return distance;
};

exports.dataTypes = {
  json: {
    ext: 'json',
    mime: 'application/json',
    output(input, beautify = false) {
      const data = JSON.stringify(input.toGeoJSON());
      return (beautify) ? vkbeautify.json(data) : data;
    },
  },
  gpx: {
    ext: 'gpx',
    mime: 'application/gpx+xml',
    output(input, beautify = false) {
      const data = togpx(input.toGeoJSON());
      return (beautify) ? vkbeautify.xml(data) : data;
    },
  },
  kml: {
    ext: 'kml',
    mime: 'application/vnd.google-earth.kml+xml',
    output(input, beautify = false) {
      const data = tokml(input.toGeoJSON());
      return (beautify) ? vkbeautify.xml(data) : data;
    },
  },
};
