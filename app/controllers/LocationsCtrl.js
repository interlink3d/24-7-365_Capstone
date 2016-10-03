"use strict";

app.controller("LocationsCtrl", function($scope, $route, $routeParams, $location, $window, MapCalls) {

  let user = $scope.$parent.getUser();
  $scope.myLocations = MapCalls.getLocations();
  let locId = $routeParams.locationId;
  let loc;


  // console.log("route params", $routeParams);

  $scope.locationDelete = (locationId) => {
    console.log("clicked delete button", locationId);
    MapCalls.deleteLocation(locationId)
    .then( (response) => {
      MapCalls.getMyLocations(user);
      console.log("deleted a location and went home");
      })
      .then(function() {
        $route.reload();
      });
  };

  $scope.writeNotes = (locationId, location) => {
    console.log("location object for reviews", location);
    console.log("location ID for reviews", locationId);
    MapCalls.updateLocation(locationId, location)
    .then(function() {
        $route.reload();
      });
  };

  $scope.getDirections = function(location) {
    console.log("location for directions", location);
    $window.open('http://maps.google.com?daddr=' + location.latCoord + ',' + location.lngCoord);
  };

});
