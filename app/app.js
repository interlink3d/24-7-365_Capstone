"use strict";

var app = angular.module("myApp", ["ngRoute"])
.constant('FBURL', "https://project-8304237271425023795.firebaseio.com/")
.constant('GMURL', "https://www.google.com/maps/embed/v1");


let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
  if(AuthFactory.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

app.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).
    when('/home', {
      templateUrl: 'partials/mapDisplay.html',
      controller: 'mapCtrl'
    }).
    when('/search', {
      templateUrl: 'partials/searchForm.html',
      controller: 'SearchCtrl'
    }).
    when('/contact', {
      templateUrl: 'partials/contactPage.html',
      controller: 'ContactCtrl'
    }).
    otherwise('/');
});

app.run( ($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});

