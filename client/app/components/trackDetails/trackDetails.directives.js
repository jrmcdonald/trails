exports.trackDetailsPopup = function trackDetailsPopup($compile, $templateRequest, $sce) {
  return {
    restrict: 'E',
    replace: true,
    controller: 'TrackDetailsCtrl',
    link(scope, element, attrs) {
      const templateUrl = $sce.getTrustedResourceUrl('./app/components/trackDetails/trackDetailsPopup.template.html');

      $templateRequest(templateUrl).then((template) => {
        const html = $compile(template)(scope);
        element.append(html);
      });
    },
  };
};
