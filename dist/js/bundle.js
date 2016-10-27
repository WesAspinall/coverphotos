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
let content = {

  bindings: {
    label: '@'
  },

  require: {
    tabs: '^^tabs'
  },

  transclude: true,
  template: `
    <div class='tabs__content' ng-if='$ctrl.content.selected'>
    <div ng-transclude></div>
    </div>
  `,
  controller: function() {

    this.content = {
      label: this.label,
      selected: false
    };

    
    this.$onInit = function () {
      this.tabs.addTab(this.content);
    };
  }
};

angular
  .module('app')
  .component('content', content);
})(window.angular);
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
let tabs = {

  transclude: true,

  controller: function() {
    this.tabs = [{
      label: 'random',
      url: 'https://source.unsplash.com/random'
    }, {
      label: 'buildings',
      url: 'https://source.unsplash.com/category/buildings/'
    }, {
      label: 'food',
      url: 'https://source.unsplash.com/category/food/'
    }, {
      label: 'nature',
      url: 'https://source.unsplash.com/category/nature/'
    }, {
      label: 'technology',
      url: 'https://source.unsplash.com/category/technology/'
    }, {
      label: 'people',
      url: 'https://source.unsplash.com/category/people/'
    }, {
      label: 'objects',
      url: 'https://source.unsplash.com/category/objects/'
    }];

    console.log(this.tabs.length);
    //add tab
    this.addTab = function addTab(tab) {
      this.tabs.push(tab);
    };

    //select tab... called with ng-click
    //sets selected property to true
    this.selectTab = function selectTab(index) {
      for (var i = 0; i < this.tabs.length; i++) {
        this.tabs[i].selected = false;
      }
      this.tabs[index].selected = true;
    };

  
    // gets called when all
    // children have been rendered
    // inside the component
    // NOT a substitute for directives DOM manipulation
    this.$postLink = function() {
      this.selectTab(0);
    };


  },

  template: `
    <div class='tabs'>
      <ul class='tabs__list'>

        <li ng-repeat='tab in $ctrl.tabs track by $index'>
        <a href=''
          ng-bind='tab.label'
          ng-click='$ctrl.selectTab($index);'></a>
        </li>
      </ul>
          <div class='tabs__content' ng-if='$ctrl.content.selected' ng-transclude>
          </div>
    </div>
  `
};

angular
  .module('app')
  .component('tabs', tabs);})(window.angular);
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
var appNav = {
  
  transclude: true,
  templateUrl: './app-nav.html',
  controller: 'NavCtrl'

}

angular
  .module('app')
  .component('appNav', appNav);})(window.angular);
(function(angular){
'use strict';
var unsplashPics = {

  bindings: {
    category: '@'
  },
  
  require: {
    categories: '^^appNav'
  },

  transclude: true,

  templateUrl: './unsplash-pics.html',
  controller: 'PicsCtrl'
}

angular
  .module('app')
  .component('unsplashPics', unsplashPics);})(window.angular);
(function(angular){
'use strict';
function AppCtrl() {
  this.appTitle = 'HD Cover Photos';
}

angular
  .module('app')
  .controller('AppCtrl', AppCtrl);})(window.angular);
(function(angular){
'use strict';
function NavCtrl() {
  var ctrl = this;
  ctrl.test = 'test from NavCtrl';

  ctrl.selectCategory = selectCategory;

  ctrl.foo = function() {
    console.log('test from NavCtrl');
  };

  ctrl.categories = [{
    category: 'random',
    selected: true,
    url: 'https://source.unsplash.com/random/851x315'
  }, {
    category: 'buildings',
    selected: false,
    url: 'https://source.unsplash.com/category/buildings/851x315'
  }, {
    category: 'food',
    selected: false,
    url: 'https://source.unsplash.com/category/food/851x315'
  }, {
    category: 'nature',
    selected: false,
    url: 'https://source.unsplash.com/category/nature/851x315'
  }, {
    category: 'people',
    selected: false,
    url: 'https://source.unsplash.com/category/people/851x315'
  }, {
    category: 'technology',
    selected: false,
    url: 'https://source.unsplash.com/category/technology/851x315'
  }, {
    category: 'objects',
    selected: false,
    url: 'https://source.unsplash.com/category/objects/851x315'
  }]


  function selectCategory(index) {
    for (var i = 0; i < ctrl.categories.length; i++) {
      ctrl.categories[i].selected = false;
    }
    ctrl.categories[index].selected = true;
  };

}

angular
  .module('app')
  .controller('NavCtrl', NavCtrl);})(window.angular);
(function(angular){
'use strict';
function PicsCtrl() {
  this.message = 'hello';
  this.$onInit = function() {
    console.log(this.categories.categories);
  };

}

angular
  .module('app')
  .controller('PicsCtrl', PicsCtrl);})(window.angular);
(function(angular){
'use strict';
angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<div class="root"><div id="root-view" ui-view></div></div>');
$templateCache.put('./app-nav.html','<div class="tabs"><ul class="tabs__list"><li ng-repeat="pic in $ctrl.categories track by $index"><a href="" ng-bind="pic.category" ng-click="$ctrl.selectCategory($index)"></a></li></ul><div class="tabs__content" ng-transclude></div></div>');
$templateCache.put('./app.html','<div class="appwrapper"><h1>{{:: $ctrl.appTitle}}</h1><!--   <h2>wth</h2> --><app-nav><unsplash-pics></unsplash-pics></app-nav></div>');
$templateCache.put('./unsplash-pics.html','<div class="tabs__content"><div ng-repeat="pic in $ctrl.categories.categories"><p ng-if="pic.selected"><img ng-src="{{pic.url}}"></p></div></div>');}]);})(window.angular);