"use strict";

app.controller('SearchCtrl', function($scope, $location, MapCalls) {

  $scope.newSearch = {
    category: "",
    location: ""
  };

  $scope.newCatSearch = function() {
    // console.log("clicked new search");
    MapCalls.convertLocation($scope.newSearch)
    .then( (response) => {
      MapCalls.getSearchObject($scope.newSearch, response)
      .then(function() {
        $location.url("/results");
      });
    });
  };

});
