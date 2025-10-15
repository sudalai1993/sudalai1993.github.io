var myyProtofolio = angular.module("myyProtofolio", ['ngRoute'])
   .config(function ($routeProvider) {
       $routeProvider
      .when("/Works", { templateUrl: "/Views/Works.html", controller: "WorksController" })
      .when("/About", { templateUrl: "/Views/About.html", controller: "AboutController" })
      .when("/WorkPortfolio", { templateUrl: "/Views/WorkPortfolio.html", controller: "WorkPortfolioController" })
      .when("/WorkMyyApp", { templateUrl: "/Views/WorkMyyApp.html", controller: "WorkMyyAppController" })
      .when("/WorkMacOs", { templateUrl: "/Views/WorkMacOs.html", controller: "WorkMacOsController" })
      .when("/WorkWeatherApp", { templateUrl: "/Views/WorkWeatherApp.html", controller: "WorkWeatherAppController" })    
      .otherwise({ redirectTo: "/Works" });
   })
