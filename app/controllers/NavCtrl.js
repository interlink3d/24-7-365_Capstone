"use strict";

app.controller("NavCtrl", function($scope, $location, MapCalls){

    $scope.navItems = [
        {url: "#/login", name: "Login", showState: "!$parent.isLoggedIn"},
        {url: "#/search", name: "Search", showState: "!$parent.isLoggedIn"},
        {url: "#/results", name: "Home", showState: "!$parent.isLoggedIn"},
        {url: "#/myplaces", name: "My Places", showState: "!$parent.isLoggedIn"},
        {url: "#/contact", name: "Contact", showState: "!$parent.isLoggedIn"}
    ];

  $scope.isActive = (viewLocation) => viewLocation === $location.path();


  $scope.locLoader = function(user) {
    user = $scope.$parent.getUser();
    MapCalls.getMyLocations(user)
    // console.log("user ID", user)
      .then(function() {
      $location.url("/myplaces");
      });
    };

});
