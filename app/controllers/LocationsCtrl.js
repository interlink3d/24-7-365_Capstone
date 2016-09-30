"use strict";

app.controller("LocationsCtrl", function($scope, $route, $routeParams, $location, MapCalls) {

  let user = $scope.$parent.getUser();
  $scope.myLocations = MapCalls.getLocations();
  let locId = $routeParams.locationId;
  let loc;


  console.log("route params", $routeParams);

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

  // $scope.writeNotes = (locationId) => {
  //   console.log("clicked notes button", locationId);
  //   MapCalls.getSingleLocation(locationId)
  //   .then( (response) => {
  //   loc = response;
  //   console.log("loc", loc);
  //   })
  //   .then(function() {
  //       $scope.eloc = loc;
  //       console.log("scope.eloc", $scope.eloc);
  //   })
  //   .then(function() {
  //       $location.url(`/myplaces/notes/${locationId}`);
  //       console.log("scope.eloc", $scope.eloc);
  //   });
  // };

  $scope.writeNotes = (locationId) => {
    MapCalls.updateLocation($routeParams.locationId)
    .then(function() {
        $route.reload();
      });
  };



});
