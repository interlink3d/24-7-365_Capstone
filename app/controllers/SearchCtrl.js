"use strict";

app.controller('SearchCtrl', function($scope, $location, $window, MapCalls) {

  $scope.newSearch = {
    category: "",
    location: "",
    uid: $scope.$parent.getUser()
  };

  $scope.newCatSearch = function() {
    console.log("clicked new search");
    MapCalls.getSearchObject($scope.newSearch)
    .then(function() {
      $location.url("/home"); // rerouting back to list view after promise is returned
    });
  };

});
