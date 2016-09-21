"use strict";

app.controller("mapCtrl", function($scope, $location, $window, $sce, MapCalls){

  // $scope.trustAsResourceUrl = $sce.trustAsResourceUrl;

  $scope.mySearchUrl = MapCalls.getUrl();
  $scope.resultsObject = MapCalls.getResults();
  $scope.searchArray = $scope.resultsObject.results;
  console.log("results object", $scope.resultsObject);
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
        $location.url("/home/moreresults");
    });
  };

});
