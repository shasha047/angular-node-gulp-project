angular.module('nubewell').directive('nubeNavigation', nubeNavigation);

function nubeNavigation() {
  return {
    restrict: 'E',
    templateUrl: 'app/html/header-directive.html'
  };
}
