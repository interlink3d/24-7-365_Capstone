"use strict";

//2 PARAMETERS 1.NAME 2.FUNCTION WTIH SCOPE AS PARAM
app.controller("NavCtrl", function($scope, $location){
    $scope.navItems = [
        {url: "#/login", name: "Login", showState: "!$parent.isLoggedIn"},
        {url: "#/home", name: "Home", showState: "!$parent.isLoggedIn"},
        {url: "#/contact", name: "contact", showState: "!$parent.isLoggedIn"}
        // {url: "#/", name: "24/7/365", showState: "$parent.isLoggedIn"}
    ];

    $scope.isActive = (viewLocation) => viewLocation === $location.path();
});
