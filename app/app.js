"use strict";

var app = angular.module("myApp", ["ngRoute", "uiGmapgoogle-maps"])
.constant('FBURL', "https://project-8304237271425023795.firebaseio.com/");
// .constant('GMURL', value);


let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
  if(AuthFactory.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

app.config(function($routeProvider){
  $routeProvider.
    when('#/', {
      templateUrl: 'partials/welcomePage.html',
      controller: 'WelcomeCtrl'
    }).
    when('/welcome', {
      templateUrl: 'partials/welcomePage.html',
      controller: 'WelcomeCtrl'
    }).
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).
    when('/home', {
      templateUrl: 'partials/mapDisplay.html',
      controller: 'TopCtrl'
    }).
    otherwise('/login');
});

app.run( ($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});

