var WorkMacOsController = angular.module("myyProtofolio")
.controller("WorkMacOsController", function ($scope, $rootScope) {
    $scope.SpinLoader = true;

    window.setTimeout(function () {
        $scope.$apply(function () {
            $scope.SpinLoader = false;
        });
    }, 2000)

    //Initializing the snow count
    $scope.snowCount = 40;
    $scope.getSnowNumber = function (snowCount) {
        return new Array(snowCount);
    }
})