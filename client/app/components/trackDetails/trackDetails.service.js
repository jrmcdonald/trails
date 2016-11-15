module.exports = function TrackDetailsService(ElevationService) {
  const getElevationGain = function getElevationGain(path) {
    return new Promise((resolve, reject) => {
      const latlngs = path.getLatLngs();

      ElevationService.getPoints(latlngs).then((data) => {
        const elevations = data.resourceSets[0].resources[0].elevations;
        console.log(elevations);
        let elevationGain = 0;
        let prevElevation = null;

        for (const elevation of elevations) {
          if (prevElevation !== null && prevElevation < elevation) {
            elevationGain += elevation - prevElevation;
          }

          prevElevation = elevation;
        }

        resolve(elevationGain);
      }).catch((err) => {
        reject(err);
      });
    });
  };

  return {
    getElevationGain,
  };
};
