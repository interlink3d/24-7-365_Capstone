"use strict";

app.factory("MapCalls", ($q, $http, GMCreds, GMURL) => {

  let gooCreds = GMCreds;
  let searchURL = "";
  let mySearchResults;
  let searchLocation = "";
  let mySearchLocation;
  let searchLocationLat;
  let searchLocationLng;

  let convertLocation = (newSearch) => {
    searchLocation = `https://maps.googleapis.com/maps/api/geocode/json?address=${newSearch.location}&key=${gooCreds.key}`;
      console.log("location convert", searchLocation);
    return $q( (resolve, reject) => {
      $http.get(searchLocation)
      .success( (locationObject) => {
        resolve(locationObject);
        console.log(locationObject);
      })
      .error( (error) => {
        reject(error);
      });
    })
    .then( (locationObject) => {
    searchLocationLat = locationObject.results[0].geometry.location.lat;
    searchLocationLng = locationObject.results[0].geometry.location.lng;
    // console.log("promise to return location lat", searchLocationLat);
    // console.log(locationObject.results[0].geometry.location.lat);
    // console.log(locationObject.results[0].geometry.location.lng);
    });
  };

  let getSearchObject = (newSearch, locationObject) => {
    searchURL = `${GMURL}${searchLocationLat},${searchLocationLng}&openNow=true&rankBy=distance&keyword=${newSearch.category}&key=${gooCreds.key}`;
    console.log("call started", newSearch);
    console.log("call started", searchURL);
    return $q( (resolve, reject) => {
      $http.get(searchURL)
      .success( (searchObject) => {
        resolve(searchObject);
        // console.log(searchObject);
      })
      .error( (error) => {
        reject(error);
      });
    })
    .then( (searchObject) => {
    mySearchResults = searchObject;
    // console.log("promise to return object indexed 1", mySearchResults);
    });
  };

  let getUrl = () => {
    return searchURL;
  };

  let getResults = () => {
    return mySearchResults;
  };

  let getLat = () => {
    return searchLocationLat;
  };

  let getLng = () => {
    return searchLocationLng;
  };

  return {convertLocation, getSearchObject, getUrl, getResults, getLat, getLng,};
});
