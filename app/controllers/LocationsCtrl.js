"use strict";

app.controller("LocationsCtrl", function($scope, $location, MapCalls) {

  let user = $scope.$parent.getUser();
  $scope.myLocations = MapCalls.getLocations();

  // $scope.locLoader = function() {
  //   console.log("clicked my places");
  //   MapCalls.getMyLocations(user);
  //   console.log("user ID", user)
  //     .then((locationsArray) => {
  //       $scope.locations = locationsArray;
  //       console.log("my locations array", $scope.locations)
  //       .then(function() {
  //       $location.url("/myplaces");
  //       });
  //     });
  // };

  // $scope.locationDelete = (itemId) => {
  //   MapCalls.deleteLocation(itemId)
  //   .then( (response) => {
  //     MapCalls.getMyLocations(user)
  //     .then( (itemCollectionArray) => {
  //       $scope.locations = itemCollectionArray;
  //     });
  //   });
  // };

});
