"use strict";
describe("controller specs", function() {
    var $scope;

    beforeEach(module("myApp.helloWorld"));
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller("helloWorldCtrl", {$scope: $scope});
    }));

    it("should create \"name\" model with first name \"John\"", function() {
        expect($scope.name.first).toBe("John");
    });

    it("should create \"name\" model with last name \"Smith\"", function() {
        expect($scope.name.last).toBe("Smith");
    });
});

describe("specs for directives", function() {
    beforeEach(module("myApp.helloWorld"));
    beforeEach(module("helloWorld/helloWorld.html"));

    var $scope;

    beforeEach(inject(function($rootScope) {
        $scope = $rootScope.$new();
        $scope.name = {first: "Will", last: "Johnson"};
    }));

    describe("hello-world", function() {
        it("should contain the provided name", function() {
            inject(function($compile) {
                var element = $compile("<div hello-world name=\"name\"></div>")($scope);
                $scope.$digest();
                expect(element.html()).toContain("Will");
                expect(element.html()).toContain("Johnson");
            });
        });
    });
});
