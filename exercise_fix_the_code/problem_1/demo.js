// * Scope uses prototypical inheritance
// * Some directives create a new scope
// * ng-controller creates a new scope

angular.module('app', [])
  .controller("profileController", function($scope) {
    $scope.firstName = "Bernard"
  });
