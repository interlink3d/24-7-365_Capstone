"use strict";

app.factory("MapCalls", ($q, $http, GMCreds, GMURL) => {

  let gCreds = GMCreds;
  let searchURL = "";
  let searchObject;

  let getSearchObject = (newSearch) => {
    searchURL = `${GMURL}/search?opennow:true&q=${newSearch.category}&key=${gCreds.key}`;
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
    });
  };

  let getUrl = () => {
    return searchURL;
  };

  return {getSearchObject, getUrl};
});