"use strict";

var app = angular.module("myApp", ["ngRoute", "uiGmapgoogle-maps"])
.constant('FBURL', "https://project-8304237271425023795.firebaseio.com/")
.constant('GMURL', "https://maps.googleapis.com/maps/api/place/nearbysearch/json?");

app.config(function(uiGmapGoogleMapApiProvider, GMCreds) {
      let gCreds = GMCreds;
      uiGmapGoogleMapApiProvider.configure({
        key: 'gCreds.key',
        v: '3.20',
        libraries: 'places',
    });
});

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
    when('/search', {
      templateUrl: 'partials/searchForm.html',
      controller: 'SearchCtrl'
    }).
    when('/home', {
      templateUrl: 'partials/mapDisplay.html',
      controller: 'mapCtrl'
    }).
    when('/home/moreresults', {
      templateUrl: 'partials/mapDisplay.html',
      controller: 'mapCtrl'
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

