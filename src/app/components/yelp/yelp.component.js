var yelp = {
  templateUrl: './yelp.html',
  controller: 'YelpCtrl'
};

angular
  .module('components.yelp')
  .component('yelp', yelp)
  .config(function($stateProvider) {
    $stateProvider
      .state('yelp', {
        parent: 'app',
        url:'^/yelp',
        component: 'yelp'
      });
  });