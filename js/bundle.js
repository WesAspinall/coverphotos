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
function NavCtrl() {
  var ctrl = this;

  ctrl.selectCategory = selectCategory;


  function selectCategory(index) {
    for (var i = 0; i < ctrl.categories.length; i++) {
      ctrl.categories[i].selected = false;
    }
    ctrl.categories[index].selected = true;
    console.log(index, ctrl.categories[index]);
  };


  ctrl.categories = [{
    category: 'random',
    selected: true
  }, {
    category: 'buildings',
    selected: false
  }, {
    category: 'food',
    selected: false
  }, {
    category: 'nature',
    selected: false
  }, {
    category: 'people',
    selected: false
  }, {
    category: 'technology',
    selected: false
  }, {
    category: 'objects',
    selected: false
  }];


}



angular
  .module('app')
  .controller('NavCtrl', NavCtrl);})(window.angular);
(function(angular){
'use strict';
PhotosCtrl.$inject = ["$state", "$cacheFactory"];
function PhotosCtrl($state, $cacheFactory) {

  var ctrl = this;
  ctrl.photoList = [];
  ctrl.url = 'https://source.unsplash.com/random/851x399?sig=';
  ctrl.getRandomInt = getRandomInt;
  ctrl.renderPhotos = renderPhotos;
  ctrl.morePhotos = morePhotos;
  // ctrl.getList = getList;
  // ctrl.keys = [];
  // ctrl.selectCategory = selectCategory;
  // ctrl.put = put;
  ctrl.cache = $cacheFactory('cacheId');
  // https://source.unsplash.com/category/{CATEGORY NAME}

  ctrl.$onInit = function() {

    // if (ctrl.cache.info().size == 0) {
    //   console.log('empty cache ... putting in photos to render');
    renderPhotos();
    // }


  };


  function getRandomInt(min, max) {
    min = Math.ceil(9000);
    max = Math.floor(0);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  function renderPhotos(index) {
    for (var i = 0; i < 5; i++) {
      ctrl.photoList.push(ctrl.url + getRandomInt());
    }
    console.log(ctrl.url);
    // ctrl.cache.put('key', ctrl.photoList);
  }

  //this belongs in a directive
  function morePhotos(index) {
    ctrl.photoList = [];
    for (var i = 0; i < ctrl.categories.length; i++) {
      ctrl.categories[i].selected = false;
    }
    ctrl.categories[index].selected = true;
    var cat = ctrl.categories[index].category;
    var clicked = ctrl.categories[index].selected;

    if (clicked && cat != 'random') {
      ctrl.url = 'https://source.unsplash.com/category/' + cat + '/851x399?sig=';
      for (var i = 0; i < 5; i++) {
        ctrl.photoList.push(ctrl.url + getRandomInt());
      }
    } else {
      ctrl.url = 'https://source.unsplash.com/random/851x399?sig=';
      for (var i = 0; i < 5; i++) {
        ctrl.photoList.push(ctrl.url + getRandomInt());
      }
    }

    console.log(cat);
    console.log(ctrl.photoList);
    // ctrl.cache.put('key', ctrl.photoList);
  }

  // function getList() {
  //   if (angular.isUndefined(ctrl.cache.get(key))) {
  //     ctrl.keys.push(value);
  //   }
  //   ctrl.cache.put(angular.isUndefined(value) ? null : value);
  // }

  function selectCategory() {
    // for (var i = 0; i < ctrl.categories.length; i++) {
    //   ctrl.categories[i].selected = false;
    // }
    // ctrl.categories[index].selected = true
    // var cat = ctrl.categories[index].category;
    // var clicked = ctrl.categories[index].selected;



    // if (clicked && cat != 'random') {
    //   ctrl.url = 'https://source.unsplash.com/category/' + cat + '/851x399?sig=';
    //   ctrl.catUrl = angular.copy(ctrl.url);
    // } else {
    //   ctrl.url = 'https://source.unsplash.com/random/851x399?sig=';
    //   $state.reload();
    // }

  };


  // function put(value) {
  // if (angular.isUndefined(ctrl.cache.get(key))) {
  //   ctrl.keys.push(value);
  // }
  // ctrl.cache.put(angular.isUndefined(value) ? null : value);
  // };

  ctrl.categories = [{
    category: 'random',
    selected: true
  }, {
    category: 'buildings',
    selected: false
  }, {
    category: 'food',
    selected: false
  }, {
    category: 'nature',
    selected: false
  }, {
    category: 'people',
    selected: false
  }, {
    category: 'technology',
    selected: false
  }, {
    category: 'objects',
    selected: false
  }];



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
})(window.angular);
(function(angular){
'use strict';
var photoNav = {
  templateUrl: './photo-nav.html',
  controller: 'PhotosCtrl'

};

angular
  .module('app')
  .component('photoNav', photoNav);})(window.angular);
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
$templateCache.put('./app.html','<div class="app--wrapper"><h1>{{::$ctrl.appTitle}}</h1><!--   <photo-nav></photo-nav> --><photos photolist="$ctrl.photoList" on-update="$ctrl.updateList($event)"></photos></div>');
$templateCache.put('./photo-nav.html','<div><ul class="categories"><li ng-repeat="item in $ctrl.categories"><a href="" ng-click="$ctrl.selectCategory($index);">{{item.category}}</a></li></ul></div>');
$templateCache.put('./photos.html','<div class="unsplash-photos"><div><ul class="categories"><li ng-repeat="item in $ctrl.categories"><a href="" ng-click="$ctrl.morePhotos($index);">{{item.category}}</a></li></ul></div><ul><li ng-if="$ctrl.photoList.length" ng-repeat="photo in $ctrl.photoList track by $index" class="photo-list"><img ng-src="{{photo}}"></li></ul></div>');}]);})(window.angular);