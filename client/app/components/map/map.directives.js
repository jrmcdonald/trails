exports.trackDetailsPopup = function trackDetailsPopup($compile, $templateRequest, $sce) {
  return {
    restrict: 'E',
    replace: true,
    link(scope, element, attrs) {
      const templateUrl = $sce.getTrustedResourceUrl('./app/components/map/trackDetailsPopup.template.html');

      $templateRequest(templateUrl).then((template) => {
        const html = $compile(template)(scope);
        element.append(html);
      });
    },
  };
};

exports.mapDetailsModal = function mapDetailsModal($compile, $templateRequest, $sce) {
  return {
    restrict: 'E',
    replace: true,
    link(scope, element, attrs) {
      const templateUrl = $sce.getTrustedResourceUrl('./app/components/map/mapDetailsModal.template.html');

      $templateRequest(templateUrl).then((template) => {
        const html = $compile(template)(scope);
        element.append(html);
      });
    },
  };
};
