"use strict";

app.factory("MapCalls", ($q, $http, GMCreds, GMURL) => {

  let gooCreds = GMCreds;
  let searchURL = "";
  let mySearchResults;

  let getSearchObject = (newSearch) => {
    searchURL = `${GMURL}36.1627,-86.7816&radius=500&openNow:true&keyword=${newSearch.category}&key=${gooCreds.key}`;
    console.log("call started", newSearch);
    return $q( (resolve, reject) => {
      $http.get(searchURL)
      .success( (searchObject) => {
        resolve(searchObject);
        console.log(searchObject);
      })
      .error( (error) => {
        reject(error);
      });
    })
    .then( (searchObject) => {
    mySearchResults = searchObject;
    console.log("promise to return object indexed 1", mySearchResults);
    });
  };

  let getUrl = () => {
    return searchURL;
  };

  let getResults = () => {
    return mySearchResults;
  };

  return {getSearchObject, getUrl, getResults};
});
