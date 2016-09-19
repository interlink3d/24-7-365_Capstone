"use strict";

app.controller("mapCtrl", function($scope, $location, $window, $sce, MapCalls){

  // $scope.trustAsResourceUrl = $sce.trustAsResourceUrl;

  $scope.map = {
    center: { latitude: 36.16, longitude: -86.78 },
    zoom: 15 };

  $scope.options = {scrollwheel: false};

  $scope.mySearchUrl = MapCalls.getUrl();
  $scope.thirdTry = MapCalls.getResults();

  console.log("search results data in MapCtrl", $scope.thirdTry);

  function flattenData (data) {
    console.log("data", data);
    $scope.dataDisplay = [];
    data.forEach(function (array) {
      for (var singleObject in array) {
       $scope.dataDisplay.push(array[singleObject]);
      }
    });
  }

  flattenData($scope.thirdTry);


});
