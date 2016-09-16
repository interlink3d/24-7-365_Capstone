"use strict";

app.factory("MapCalls", ($q, $http, GMURL, GMCreds) => {

  let gCreds = GMCreds;

  let getSearchObject = (newSearch) => {
    console.log("call started", newSearch);
    return $q( (resolve, reject) => {
      $http.get(`${GMURL}/search?key=${gCreds.key}&q=${newSearch}`)
      .success( (searchObject) => {
        resolve(searchObject);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };


  return {getSearchObject};
});
