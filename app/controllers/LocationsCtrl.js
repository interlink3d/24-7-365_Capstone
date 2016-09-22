"use strict";

app.controller("LocationsCtrl", function($scope, $route, $location, MapCalls) {

  let user = $scope.$parent.getUser();
  $scope.myLocations = MapCalls.getLocations();

  $scope.locationDelete = (locationId) => {
    console.log("clicked delete button", locationId);
    MapCalls.deleteLocation(locationId)
    .then( (response) => {
      MapCalls.getMyLocations(user);
      console.log("deleted a location and went home")
      // .then( (response) => {
      //   $scope.myLocations = response
        .then(function() {
          $route.reload();
        });
      });
    // });
  };

});
