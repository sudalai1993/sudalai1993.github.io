var WorkWeatherAppController = angular.module("myyProtofolio")
.controller("WorkWeatherAppController", function ($scope, $rootScope) {
    $scope.SpinLoader = true;
    $scope.showSwitch = false;
    $("#switcher").css("transform", "translateX(-200%)");
    $("#showSwitcher").css("transform", "translateX(0)");
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
    //function to toggle the settings tab
    $scope.toggleSwitch = function () {
        if (!$scope.showSwitch) {
            $("#switcher").css("transform", "translateX(0)");
            $("#showSwitcher").css("transform", "translateX(-200%)");

            $scope.showSwitch = true;
        }
        else if ($scope.showSwitch) {
            $("#showSwitcher").css("transform", "translateX(0)");
            $("#switcher").css("transform", "translateX(-200%)");
            $scope.showSwitch = false;
        }
    }

    //function to get a stylesheet and its css

    $scope.getStyleSheet = function (cssName, rule) {
        for (i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].href && document.styleSheets[i].href.toString().indexOf(cssName) != -1)
                if (document.styleSheets[i].hasOwnProperty('rules')) {
                    for (x = 0; x < document.styleSheets[i].rules.length; x++) {
                        if (document.styleSheets[i].rules[x].selectorText && document.styleSheets[i].rules[x].selectorText.toString().indexOf(rule) != -1)
                            return document.styleSheets[i].rules[x];
                    }
                }
                else {
                    for (x = 0; x < document.styleSheets[i].cssRules.length; x++) {
                        if (document.styleSheets[i].cssRules[x].selectorText && document.styleSheets[i].cssRules[x].selectorText.toString().indexOf(rule) != -1)
                            return document.styleSheets[i].cssRules[x];
                    }
                }

        }

        return null;
    }


    //function for Changing the theme

    $scope.changeTheme = function (upperColor, lowerColor, outlineShadow, shadow, gradient) {

        $scope.getStyleSheet('Main', '.main-header').style.color = upperColor;
        $scope.getStyleSheet('Main', '.main-headerScroll').style.backgroundColor = upperColor;
        $scope.getStyleSheet('Main', '.main-header .header-wrapper .main-menu li a').style.color = upperColor;
        $scope.getStyleSheet('Main', '.footerMain').style.backgroundColor = lowerColor;
        $scope.getStyleSheet('Main', '#section-1').style.color = upperColor;
        $scope.getStyleSheet('Main', 'section #services li div').style.color = lowerColor;
        $scope.getStyleSheet('Main', '.WorksUI').style.boxShadow = outlineShadow;
        $scope.getStyleSheet('Main', '.picWorks').style.border = '10px solid ' + upperColor;
        $scope.getStyleSheet('Main', '.info').style.backgroundColor = shadow;
        $scope.getStyleSheet('Main', '.chart__bar').style.background = gradient;
        $scope.getStyleSheet('Main', '#timeline .timeline-item .timeline-content h2').style.backgroundColor = lowerColor;
        $scope.getStyleSheet('Main', '#timeline::before').style.backgroundColor = lowerColor;
        $scope.getStyleSheet('Main', '#timeline .timeline-item .timeline-icon').style.backgroundColor = lowerColor;
        //Save the preference in local Storage
        if (typeof (Storage) !== "undefined") {
            localStorage.upperColor = upperColor;
            localStorage.lowerColor = lowerColor;
            localStorage.outlineShadow = outlineShadow;
            localStorage.shadow = shadow;
            localStorage.gradient = gradient;
        }
    }

    //Initializing the stored themes
    if (typeof (Storage) !== "undefined") {
        if (localStorage.upperColor != undefined && localStorage.lowerColor != undefined) {
            $scope.changeTheme(localStorage.upperColor, localStorage.lowerColor, localStorage.outlineShadow, localStorage.shadow, localStorage.gradient);
        }
    }
})