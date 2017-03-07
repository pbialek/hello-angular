"use strict";
angular.module("myApp.helloWorld", [])
.controller("helloWorldCtrl", function($scope) {
    $scope.name = {first: "John", last: "Smith"};
})
.directive("helloWorld", function() {
    return {
        restrict: "AE",
        scope: {name: "=name"},
        template: "<h1>Hello {{ name.first }} {{ name.last }}!</h1>" +
            "<input data-ng-model='name.first'></input>" +
            "<input data-ng-model='name.last'></input>"
    };
});
