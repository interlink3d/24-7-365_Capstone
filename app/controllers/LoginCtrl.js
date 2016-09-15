"use strict";

app.controller("LoginCtrl", function($scope, $window, AuthFactory) {
  $scope.account = {
    email: "",
    password: ""
  };

  $scope.newUser = {
    userName : "",
    uid: $scope.$parent.getUser()
  };

  $scope.register = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then( (userData) => {
      console.log("newUser", userData);
      $scope.login();
    }, (error) => {
      console.log(`Error creating user: ${error}`);
    });
  };

  $scope.login = () => {
    console.log("you clicked login");
    AuthFactory.loginUser($scope.account)
    .then( (data) => {
      if (data) {
        $window.location.href = "#/home";
      } else {
        $window.location.href = "#/home";
      }
      console.log("data from login", data);
    }, (error) => {
      console.log("error loggin in", error);
    });
  };

});
