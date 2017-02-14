const Utils = require('../common/utils/index');

module.exports = function DownloadCtrl($scope) {
  const $grandParentScope = $scope.$parent.$parent;

  $scope.dataTypes = Utils.dataTypes;
  $scope.tabs = [
    {
      title: 'GeoJSON',
      format: 'json',
    },
    {
      title: 'GPX',
      format: 'gpx',
    },
    {
      title: 'KML',
      format: 'kml',
    },
  ];

  $scope.setExportFormat = function setExportFormat(format) {
    $scope.exportFormat = format;
  };

  $scope.download = function download() {
    let mapName = '';

    if (typeof $grandParentScope.loadedMap !== 'undefined' && $grandParentScope.loadedMap !== null) {
      mapName = $grandParentScope.loadedMap.name;
    } else {
      mapName = 'Route1';
    }

    const format = $scope.exportFormat;
    const data = $scope.dataTypes[format].output($grandParentScope.features);
    const fileName = `${mapName}.${$scope.dataTypes[format].ext}`;
    const options = {
      type: `${$scope.dataTypes[format].mime};charset=utf-8`,
    };

    // http://stackoverflow.com/a/20194533
    const tempElem = window.document.createElement('a');
    tempElem.href = window.URL.createObjectURL(new Blob([data], options));
    tempElem.download = fileName;

    document.body.appendChild(tempElem);
    tempElem.click();

    // tidy up
    document.body.removeChild(tempElem);
  };
};
