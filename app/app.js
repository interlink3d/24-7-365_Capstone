"use strict";

var app = angular.module("myApp", ["ngRoute", "uiGmapgoogle-maps"]);

app.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'partials/mapDisplay.html',
      controller: 'mapCtrl'
    }).
    otherwise('/');
});


