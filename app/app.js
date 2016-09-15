"use strict";

var app = angular.module("myApp", ["ngRoute"])
.constant('FBURL', "https://project-8304237271425023795.firebaseio.com/");
// .constant('GMURL', value);

// app.config(function(uiGmapGoogleMapApiProvider, GMCreds) {
//       let gCreds = GMCreds;
//       uiGmapGoogleMapApiProvider.configure({
//         key: 'gCreds.key',
//         v: '3.20', //defaults to latest 3.X anyhow
//         libraries: 'places',  // Required for SearchBox.
//     });
// });

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
      controller: 'mapCtrl'
    }).
    when('/search', {
      templateUrl: 'partials/searchForm.html',
      controller: 'SearchCtrl'
    });
});

app.run( ($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});

