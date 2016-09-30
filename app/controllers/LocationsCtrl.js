"use strict";

app.controller("LocationsCtrl", function($scope, $route, $routeParams, $location, MapCalls) {

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


  // $scope.runVideoEdit = function(commentedVideo) {
  //     let id = $routeParams.videoId;
  //     console.log(commentedVideo)

  //     // VideoFactory.editVideo($routeParams.videoId)
  //     VideoFactory.editVideo(id, commentedVideo)
  //         .then(() =>
  //             console.log(commentedVideo)
  //         )

  //     //First subsequent function post-editItem-promise: console.log the edited item
  //     .then(function() {
  //             $location.url('/video');
  //         })
  //         .then(function() {
  //             console.log(id)
  //         })
  //         //Second subsequent function post-editItem-promise: $location changes the url back kick to item/list view:


  //     //NOTICE THAT TO CHAIN YOUR THENS YOU CAN'T USE A SEMI-COLON UNTIL THE VERY LAST ONE

  // };


});
