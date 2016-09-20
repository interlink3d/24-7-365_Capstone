"use strict";

app.controller("mapCtrl", function($scope, $location, $window, $sce, MapCalls){

  // $scope.trustAsResourceUrl = $sce.trustAsResourceUrl;

  $scope.mySearchUrl = MapCalls.getUrl();
  $scope.resultsObject = MapCalls.getResults();
  $scope.searchArray = $scope.resultsObject.results;
  console.log("search array", $scope.searchArray);
  $scope.lat = MapCalls.getLat();
  $scope.lng = MapCalls.getLng();

  $scope.map = {
    center: { latitude: $scope.lat, longitude: $scope.lng },
    zoom: 15 };

  $scope.options = {scrollwheel: true};

});
