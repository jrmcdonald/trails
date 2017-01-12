exports.errorMessages = function errorMessages() {
  return {
    restrict: 'E',
    scope: {
        element: "="
    },
    templateUrl: './app/components/common/forms/messages.template.html',
  };
};
