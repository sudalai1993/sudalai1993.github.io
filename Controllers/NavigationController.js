var NavigationController = angular.module("myyProtofolio")
.controller("NavigationController", function ($scope, $routeParams, $location) {

    $scope.navigateTo = function myfunction(view) {

        $location.url('/' + view)

    }



})