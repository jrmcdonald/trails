exports.trackDetailsPopup = function($compile, $templateRequest, $sce) {
    return {
        restrict: 'E',
        replace: true,
        link: function(scope, element, attrs) {
            var templateUrl = $sce.getTrustedResourceUrl('./app/components/map/trackDetailsPopup.template.html');

            $templateRequest(templateUrl).then(function(template) {
                var html = $compile(template)(scope);
                element.append(html);
            });
        }
    };
}

exports.mapDetailsModal = function($compile, $templateRequest, $sce) {
    return {
        restrict: 'E',
        replace: true,
        link: function(scope, element, attrs) {
            var templateUrl = $sce.getTrustedResourceUrl('./app/components/map/mapDetailsModal.template.html');

            $templateRequest(templateUrl).then(function(template) {
                var html = $compile(template)(scope);
                element.append(html);
            });
        }
    };
}