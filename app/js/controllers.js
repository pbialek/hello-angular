"use strict";
angular.module("myApp.controllers", [])
    .controller("helloWorldCtrl", function($scope) {
        $scope.name = {first: "John", last: "Smith"};
    });
