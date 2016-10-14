function UnsplashService($http) {

  var API = 'http://localhost:8000/api/unsplash/photos';

  this.getData = getData;

  function getData() {
    $http.get(API).then(function(res) {
      return res;
    });
  }

}

angular
  .module('unsplash')
  .service('UnsplashService', UnsplashService);