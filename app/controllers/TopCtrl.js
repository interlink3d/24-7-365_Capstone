"use strict";

app.controller('TopCtrl', function($scope, $location, $window, AuthFactory) {
  $scope.isLoggedIn = false;

  let currentUser = null;




  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      currentUser = user.uid;  // ability to edit and pull UID while logged in
      $scope.isLoggedIn = true;
      console.log("Current user logged in?", user.uid);
    } else {
      currentUser = null;  //after logged out removes ability
      $scope.isLoggedIn = false;
      $window.location.href = "#/login";
    }
      $scope.$apply();  // since the change takes place inside a reg function, we have to refresh
  });

  $scope.getUser = function () {
    return currentUser;
  };

  $scope.logout = function() {
    AuthFactory.logoutUser()
    .then(function(data) {
      console.log("logged out", data);
    });
  };

});
