/* eslint-disable no-bitwise */

module.exports = function ElevationsService($http) {
  const BASE_API_URL = '/api/elevations';
  const GET_LIMIT = 400;
  const SINGLE_POST_LIMIT = 1024;

  // Encode points algorithm from https://msdn.microsoft.com/en-us/library/jj158958.aspx#javascriptalg
  const encodePoints = function encodePoints(points) {
    let latitude = 0;
    let longitude = 0;
    const result = [];

    points.forEach((point) => {
      const newLatitude = Math.round(point.lat * 100000);
      const newLongitude = Math.round(point.lng * 100000);

      let dy = newLatitude - latitude;
      let dx = newLongitude - longitude;
      latitude = newLatitude;
      longitude = newLongitude;

      dy = (dy << 1) ^ (dy >> 31);
      dx = (dx << 1) ^ (dx >> 31);

      let index = ((dy + dx) * (dy + dx + 1) / 2) + dy;

      while (index > 0) {
        let rem = index & 31;
        index = (index - rem) / 32;

        if (index > 0) rem += 32;

        result.push('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'[rem]);
      }
    });

    return result.join('');
  };

  const getPoints = function getPoints(points) {
    const numPoints = points.length;
    const promises = [];

    if (numPoints < GET_LIMIT) {
      promises.push($http.get(`${BASE_API_URL}/List?points=${encodePoints(points)}`));
    } else {
      const groups = [];

      while (points.length) {
        groups.push(points.splice(0, SINGLE_POST_LIMIT));
      }

      groups.forEach((group) => {
        const pointList = group.map(point => `${point.lat},${point.lng}`).join(',');
        const data = {
          points: pointList,
        };

        promises.push($http.post(`${BASE_API_URL}/List`, data));
      });
    }

    return Promise.all(promises).then((responses) => {
      const elevations = [];

      if (responses.constructor === Array) {
        responses.forEach((response) => {
          Array.prototype.push.apply(elevations, response.data.resourceSets[0].resources[0].elevations);
        });
      } else {
        Array.prototype.push.apply(elevations, responses.data.resourceSets[0].resources[0].elevations);
      }

      return elevations;
    });
  };

  return {
    getPoints,
  };
};
