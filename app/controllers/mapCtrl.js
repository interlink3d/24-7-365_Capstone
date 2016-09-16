"use strict";

app.controller("mapCtrl", function($scope, $location, $window, $sce, MapCalls){

  $scope.map = { center: { latitude: 36.16, longitude: -86.78 }, zoom: 15 };

  $scope.mySearchUrl = MapCalls.getUrl();

  $scope.trustAsResourceUrl = $sce.trustAsResourceUrl;


});
