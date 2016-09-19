"use strict";

app.controller('SearchCtrl', function($scope, $location, MapCalls) {

  $scope.newSearch = {
    category: "",
    location: ""
  };

  $scope.newCatSearch = function() {
    console.log("clicked new search");
    MapCalls.getSearchObject($scope.newSearch)
    .then(function() {
      $location.url("/home"); // rerouting back to list view after promise is returned
    });
  };

});
