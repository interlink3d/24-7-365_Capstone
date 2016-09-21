"use strict";

app.controller("mapCtrl", function($scope, $location, $window, $sce, $route, MapCalls){

  // $scope.trustAsResourceUrl = $sce.trustAsResourceUrl;

  $scope.mySearchUrl = MapCalls.getUrl();
  $scope.resultsObject = MapCalls.getResults();
  $scope.searchArray = $scope.resultsObject.results;
  // console.log("results object", $scope.resultsObject);
  $scope.lat = MapCalls.getLat();
  $scope.lng = MapCalls.getLng();

  $scope.map = {
    center: { latitude: $scope.lat, longitude: $scope.lng },
    zoom: 15 };

  $scope.options = {scrollwheel: true};

  $scope.nextResults = function() {
    console.log("clicked more results");
    MapCalls.moreResults($scope.resultsObject)
      .then(function() {
        $route.reload();
    });
  };

  $scope.saveLocation = function(results) {
    console.log("results object", results);
      $scope.locObject = {
        name: results.name,
        rating: results.rating,
        vicinity: results.vicinity,
        placeID: results.place_id,
        pid: results.id,
        latCoord: results.geometry.location.lat,
        lngCoord: results.geometry.location.lng,
        review: "",
        uid: $scope.$parent.getUser()
      };
    MapCalls.postNewLocation($scope.locObject);
    // console.log("locObject in SL", $scope.locObject);
  };

});
