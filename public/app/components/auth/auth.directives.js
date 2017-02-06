exports.authModal = function authModal($compile, $templateRequest, $sce) {
  return {
    restrict: 'E',
    replace: true,
    link(scope, element, attrs) {
      const templateUrl = $sce.getTrustedResourceUrl('./app/components/auth/authModal.template.html');

      $templateRequest(templateUrl).then((template) => {
        const html = $compile(template)(scope);
        element.append(html);
      });
    },
  };
};
