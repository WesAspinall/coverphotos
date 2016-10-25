(function(angular){
'use strict';
angular
  .module('root', [
    'app',
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
var root = {

  templateUrl: './root.html'

};

angular
  .module('root')
  .component('root', root);})(window.angular);
(function(angular){
'use strict';
function AppCtrl() {
  this.appTitle = 'Cover Photos';
}

angular
  .module('app')
  .controller('AppCtrl', AppCtrl);})(window.angular);
(function(angular){
'use strict';
function PhotosCtrl() {
  var vm = this;
  vm.url = 'https://source.unsplash.com/category/nature/851x399?sig=';
  vm.quantity = '';
  vm.photoList = [];
  vm.getRandomInt = getRandomInt;
  vm.renderPhotos = renderPhotos;

  this.$postLink = function() {
    return renderPhotos();
  };

  function getRandomInt(min, max) {
    var min = Math.ceil(9000);
    var max = Math.floor(0);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function renderPhotos() {
    var photoList = vm.photoList;
    var url = vm.url;
    for(var i = 0; i < 5; i++) {
      photoList.push(url+getRandomInt());
    } 
    return vm.photoList;
  }


}

angular
  .module('app')
  .controller('PhotosCtrl', PhotosCtrl);})(window.angular);
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

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('app', {
        url: '/',
        component: 'app'
      });
      
  }]);})(window.angular);
(function(angular){
'use strict';
var photos = {
  templateUrl: './photos.html',
  controller: 'PhotosCtrl'
};

angular
  .module('app')
  .component('photos', photos);})(window.angular);
(function(angular){
'use strict';
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<div class="root"><div id="root-view" ui-view></div></div>');
$templateCache.put('./app.html','<div class="app--wrapper"><h1>{{::$ctrl.appTitle}}</h1><photos></photos></div>');
$templateCache.put('./photos.html','<div class="photos--wrapper"><ul><li ng-repeat="photo in $ctrl.photoList track by $index"><img ng-src="{{photo}}"></li></ul></div>');}]);})(window.angular);