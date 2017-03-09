"use strict";
angular.module("myApp.helloWorld", [])
.controller("helloWorldCtrl", function($scope) {
    $scope.name = {first: "John", last: "Smith"};
})
.directive("helloWorld", function() {
    return {
        restrict: "AE",
        scope: {name: "=name"},
        templateUrl: "helloWorld/helloWorld.html"
    };
});
