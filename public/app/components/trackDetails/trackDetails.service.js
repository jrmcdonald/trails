module.exports = function TrackDetailsService(ElevationService) {
  const getElevationGain = function getElevationGain(path) {
    return new Promise((resolve, reject) => {
      const latlngs = path.getLatLngs();

      ElevationService.getPoints(latlngs).then((elevations) => {
        let elevationGain = 0;
        let prevElevation = null;

        elevations.forEach((elevation) => {
          if (prevElevation !== null && prevElevation < elevation) {
            elevationGain += elevation - prevElevation;
          }

          prevElevation = elevation;
        });

        resolve(elevationGain);
      }).catch((err) => {
        reject(err);
      });
    });
  };

  const getWalkingTime = function getWalkingTime(distance, elevationGain) {
    const kilometres = distance / 1000;

    // Naismith's rule = 1 hour per 5km forward and 1 hour per 600m ascent.
    const forwards = kilometres / 5;
    const ascent = elevationGain / 600;
    const minutes = (forwards * 60) + (ascent * 60);

    return minutes;
  };

  return {
    getElevationGain,
    getWalkingTime,
  };
};
