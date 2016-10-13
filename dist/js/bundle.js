(function(angular){
'use strict';
angular
  .module('root', [
    'app',
    'components',
    'templates'
  ]);})(window.angular);
(function(angular){
'use strict';
angular
  .module('app', [
    'ui.router'
  ])
  ;})(window.angular);
(function(angular){
'use strict';
angular
  .module('components', [
    'components.home'
  ]);
})(window.angular);
(function(angular){
'use strict';
angular
  .module('components.home', [
    'results'
  ]);
})(window.angular);
(function(angular){
'use strict';
angular
  .module('results', [
    'ui.router'
  ]);})(window.angular);
(function(angular){
'use strict';
var root = {

  templateUrl: './root.html'

};

angular
  .module('root')
  .component('root', root);})(window.angular);
(function(angular){
'use strict';
function AppCtrl() {
  var vm = this;
  vm.hello = 'hedlo';


}

angular
  .module('app')
  .controller('AppCtrl', AppCtrl);})(window.angular);
(function(angular){
'use strict';
var app = {
  templateUrl: './app.html',
  controller: 'AppCtrl'
};

angular
  .module('app')
  .component('app', app)
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('app', {
        redirectTo: 'home',
        url: '/',
        component: 'app'
      });
  }]);})(window.angular);
(function(angular){
'use strict';
var hero = {
  templateUrl: './hero.html'
};

angular
  .module('app')
  .component('hero', hero);})(window.angular);
(function(angular){
'use strict';
var searchBar = {
  templateUrl: './search-bar.html'
};

angular
  .module('app')
  .component('searchBar', searchBar);})(window.angular);
(function(angular){
'use strict';
var home = {
  templateUrl: './home.html'
};

angular
  .module('components.home')
  .component('home', home);})(window.angular);
(function(angular){
'use strict';
UnsplashCtrl.$inject = ["UnsplashService"];
function UnsplashCtrl(UnsplashService) {

  let vm = this;

  vm.list = '';
  vm.getData = getData;
  vm.activate = activate;
  activate();

  function activate() {
    getData();
  }

  function getData() {

    return UnsplashService.getData().then((res) => {
      console.log(res);

    });

  }


}

angular
  .module('results')
  .controller('UnsplashCtrl', UnsplashCtrl);})(window.angular);
(function(angular){
'use strict';
UnsplashService.$inject = ["$http"];
function UnsplashService($http) {

  var API = '/api/token';

  this.getData = getData;

  function getData() {
    return $http.get(API, {cache: true}).then((res) => {

      return res;

    });
  }

}

angular
  .module('results')
  .service('UnsplashService', UnsplashService);})(window.angular);
(function(angular){
'use strict';
var results = {
  templateUrl: './results.html',
  controller: 'UnsplashCtrl'
};

angular
  .module('results')
  .component('results', results)
  .config(["$stateProvider", function($stateProvider) {
    $stateProvider
      .state('home', {
        parent: 'app',
        url:'^/home',
        component: 'results'
      });
  }]);
})(window.angular);
(function(angular){
'use strict';
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<div class="root"><div id="root-view" ui-view></div></div>');
$templateCache.put('./app.html','<div class="app"><hero></hero><div id="main"><div id="content"><div id="wrapper"><div class="box" ui-view></div></div></div></div></div>');
$templateCache.put('./hero.html','<div class="hero"><div><h1>unsplash image search</h1></div><search-bar></search-bar></div>');
$templateCache.put('./search-bar.html','<div>hello from search bar</div>');
$templateCache.put('./results.html','<div><div class="home-content"><p>placeholder</p></div></div>');}]);})(window.angular);