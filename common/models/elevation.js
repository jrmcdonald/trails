module.exports = function (Elevation) {
  const isStatic = true;
  Elevation.disableRemoteMethod('invoke', isStatic);
};
