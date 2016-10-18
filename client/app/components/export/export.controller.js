var Utils = require('../common/utils/index');

module.exports = function($scope, $uibModal) {
    $scope.dataTypes = Utils.dataTypes;
    $scope.tabs = [
        {
            title: "GeoJSON",
            format: "json"
        },
        {
            title: "GPX",
            format: "gpx"
        },
        {
            title: "KML",
            format: "kml"
        }
    ];

    $scope.setExportFormat = function(format) {
        $scope.exportFormat = format;
    }

    $scope.openExport = function () {
        var modalInstance;
        var modalScope = $scope.$new();

        modalScope.download = function () {
            var format = $scope.exportFormat;
            var data = $scope.dataTypes[format].output($scope.$parent.features);
            var filename = "Route1." + $scope.dataTypes[format].ext;
            var options = {
                type: $scope.dataTypes[format].mime + ";charset=utf-8"
            }

            // http://stackoverflow.com/a/20194533
            var tempElem = window.document.createElement('a');
            tempElem.href = window.URL.createObjectURL(new Blob([data], options));
            tempElem.download = filename;

            document.body.appendChild(tempElem)
            tempElem.click();
            
            // tidy up
            document.body.removeChild(tempElem)
        };

        modalScope.close = function () {
            modalInstance.dismiss('cancel');
        };      

        modalInstance = $uibModal.open({
            template: '<export></export>',
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            windowClass: 'export-modal',
            size: 'lg',
            scope: modalScope
        });
    };
}