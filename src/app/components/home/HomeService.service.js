function HomeService($http) {

  var API = 'https://api.yelp.com/v2/search?term=food&location=San+Francisco';

  this.getData = getData;

  function getData() {
    return $http.get(API, {cache: true}).then((res) => {

      return res;

    });
  }

}

angular
  .module('components.home')
  .service('HomeService', HomeService);