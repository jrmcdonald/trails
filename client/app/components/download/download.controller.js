const Utils = require('../common/utils/index');

module.exports = function DownloadCtrl($scope, $uibModal) {
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

  $scope.openDownloadModal = function openDownloadModal() {
    let modalInstance;
    const modalScope = $scope.$new();

    modalScope.download = function download() {
      const format = $scope.exportFormat;
      const data = $scope.dataTypes[format].output($scope.$parent.features);
      const filename = `Route1.${$scope.dataTypes[format].ext}`;
      const options = {
        type: `${$scope.dataTypes[format].mime};charset=utf-8`,
      };

      // http://stackoverflow.com/a/20194533
      const tempElem = window.document.createElement('a');
      tempElem.href = window.URL.createObjectURL(new Blob([data], options));
      tempElem.download = filename;

      document.body.appendChild(tempElem);
      tempElem.click();

      // tidy up
      document.body.removeChild(tempElem);
    };

    modalScope.close = function close() {
      modalInstance.dismiss('cancel');
    };

    modalInstance = $uibModal.open({
      template: '<download-modal></download-modal>',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      windowClass: 'download-modal',
      size: 'lg',
      scope: modalScope,
    });
  };
};
