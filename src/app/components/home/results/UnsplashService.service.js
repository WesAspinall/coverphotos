function UnsplashService($http) {

  var API = 'https://unsplash-express-api.herokuapp.com/api/unsplash/photos';

  this.getData = getData;

  function getData() {
    return $http.get(API, {cache: true}).then((res) => {

      return res;

    });
  }

}

angular
  .module('results')
  .service('UnsplashService', UnsplashService);