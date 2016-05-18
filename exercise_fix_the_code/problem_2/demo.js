// * Scope uses prototypical inheritance
// * Some directives create a new scope
// * ng-controller creates a new scope

angular.module('app', [])
  .controller("profileFormController", function($scope) {
  })
  .controller("profileController", function($scope) {
  });
