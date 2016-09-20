"use strict";

app.controller("mapCtrl", function($scope, $location, $window, $sce, MapCalls){

  // $scope.trustAsResourceUrl = $sce.trustAsResourceUrl;

  $scope.map = {
    center: { latitude: 36.16, longitude: -86.78 },
    zoom: 15 };

  $scope.options = {scrollwheel: false};

  $scope.mySearchUrl = MapCalls.getUrl();
  $scope.resultsObject = MapCalls.getResults();

  console.log("search results data in MapCtrl", $scope.resultsObject);
  console.log("index 0 of results", $scope.resultsObject.results[0]);
  console.log("results[0].name", $scope.resultsObject.results[0].name);


  function flattenData (data) {
    console.log("data", data);
    $scope.dataDisplay = [];
    data.forEach(function (array) {
      for (var singleObject in array) {
       $scope.dataDisplay.push(array[singleObject]);
      }
      console.log("datadisplay", $scope.dataDisplay);
    });
  }

  flattenData($scope.resultsObject.results);


});
