// We need to create a module for our app
// Controllers are hooked to the DOM using the ng-controller directive
// ng-controller="demoController"
// The Model is just an object saved on a special object called $scope
// We can save models on $scope
// We can save helper functions on $scope
// We can use a self executing function to tidy up our modules
// The purpose of the controller is to set up $scope.
// But we can optionally save the controller in scope and save functions on this

// http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg

(function() {

  var greeting = (name) => {
    return [
      'HJello',
      name
    ].join(' ');
  };

  var controller = function($scope) {
    $scope.name = "confused Carl";
    $scope.sayHello = () => {
      $scope.greeting = greeting($scope.name);
    };
  };

  angular.module('app', [])
    .controller('myController', controller);

})();
