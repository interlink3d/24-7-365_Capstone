"use strict";

app.controller("LoginCtrl", function($scope, $window, AuthFactory) {
  $scope.account = {
    email: "",
    password: "",
    userName: "",
    uid: $scope.$parent.getUser()
  };

  // $scope.newUser = {
  //   userName : "",
  //   uid: $scope.$parent.getUser()
  // };

  $scope.register = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then( (userData) => {
      console.log("newUser", userData);
      console.log("new account", $scope.account);
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
        $window.location.href = "#/search";
      } else {
        $window.location.href = "#/search";
      }
      console.log("data from login", data);
      console.log("new account", $scope.account);
    }, (error) => {
      console.log("error loggin in", error);
    });
  };

});
