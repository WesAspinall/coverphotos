var results = {
  templateUrl: './results.html',
  controller: 'UnsplashCtrl'
};

angular
  .module('results')
  .component('results', results)
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        parent: 'app',
        url:'^/home',
        component: 'results'
      });
  });