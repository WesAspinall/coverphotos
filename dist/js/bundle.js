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

    $urlRouterProvider.otherwise('/');
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
UnsplashCtrl.$inject = ["UnsplashService"];
function UnsplashCtrl(UnsplashService) {

  let vm = this;


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
$templateCache.put('./results.html','<div><div class="home-content">hello from home<p>In Venice Beach there was a man named Kage. Wonderboy, what is the secret of your power? Wonderboy, what is the secret of your power? In Venice Beach there was a man named Kage. That was awesome. You changed people\'s lives tonight. You\'ve disobeyed my orders, son, Why were you ever born? They must pay the rent, with their rock. Wonderboy, what is the secret of your power? We\'ll lead as Two Kings, We\'ll f***in\' lead as Two Kings. And then after the smoke is cleared, and the rubble has been swept away, me and KG will peek out our heads. Riggah-goo-goo, riggah-goo-goo. There\'s just no way that we can win, that was a masterpiece. He rocks too hard because he\'s not a mortal man. We are fuelled by Satan, yes we\'re schooled by Satan. We know you\'re all robots and we don\'t care Tenacious D, we reign! High above the mucky-muck, castle made of clouds. There sits Wonderboy, sitting oh so proudly. The demon code prevents me from declining a rock off challenge. I\'m tryin\' to watch my calorie intake. Friendship is rare, do you know what I\'m saying to you? What we got is gonna turn your brain into s**t are you willing to make the commitment to wakin\' up at the crack a\' noon, for deep-knee rock squats!? Seven or eight at a time, in a row? That---what happened before when I said I love you, that was a test. Because, man, I could\'ve made a total ASS of myself if I hadn\'t done this test on you. The most powerful tool in singing technology since yodelling, dude. There\'s just no way that we can win, that was a masterpiece. Better, closer, warmer. Ben Franklin was a rebel indeed Two air vents on the roof. The sun doth shine and the moon doth glow. Riggah-goo-goo, riggah-goo-goo. The sun doth shine and the moon doth glow. Wonderboy, what is the secret of your power? Cuz the land of love and freedom is just a baby\'s breath away. If we hold hands together, we can take back the USA. New-wave tried to kill the metal. Lee-Lee-Lee Lee-Lee Lee-Lee-Lee-Lee. Hail Satan. I love you. I said I love you, man. Just wanted to say it. There\'s just no way that we can win, that was a masterpiece. He rocks too hard because he\'s not a mortal man. Long live me, I poisoned your wine. I\'m tryin\' to watch my calorie intake. Wonderboy, what is the secret of your power? There\'s just no way that we can win, that was a masterpiece. Cuz the land of love and freedom is just a baby\'s breath away. If we hold hands together, we can take back the USA. Couldn\'t split up Kato and Nash, that\'s true. Couldn\'t split up Tango and Cash, that\'s also true. Do you believe in God? Better, closer, warmer. Ben Franklin was a rebel indeed Cause it\'s the pick... of destiny. Techno tried to defile the metal, but techno was proven wrong. Your brother\'s 10x better than you Jesus loves him more. Last week, Kyle quit the band. But now we\'re back together. Your brother\'s 10x better than you Jesus loves him more. The demon code prevents me from declining a rock off challenge. With karate I\'ll kick your a**, from here to right over there. Cause it\'s the pick... of destiny. You\'ve disobeyed my orders, son, Why were you ever born? We know you\'re all robots and we don\'t care Tenacious D, we reign! And then after the smoke is cleared, and the rubble has been swept away, me and KG will peek out our heads. New-wave tried to kill the metal. You\'ve disobeyed my orders, son, Why were you ever born? Can\'t you see he\'s the man, let me hear you applaud, he is more than a man he\'s a shiny golden god. Lee-Lee-Lee Lee-Lee Lee-Lee-Lee-Lee. Give it up for KG, give it up for me. I\'m not gonna cook it but I\'ll order it from Zanzibar. With karate I\'ll kick your a**, from here to right over there. Whooooahahaha! I\'m not gonna cook it but I\'ll order it from Zanzibar. Punk-rock tried to kill the metal. I love you. I said I love you, man. Just wanted to say it. You\'ve disobeyed my orders, son, Why were you ever born? We know you\'re all robots and we don\'t care Tenacious D, we reign! The sun doth shine and the moon doth glow. Can\'t you see he\'s the man, let me hear you applaud, he is more than a man he\'s a shiny golden god. The sun doth shine and the moon doth glow. You\'ve disobeyed my orders, son, Why were you ever born? Whooooahahaha! You\'ve disobeyed my orders, son, Why were you ever born? Punk-rock tried to kill the metal. Lee-Lee-Lee Lee-Lee Lee-Lee-Lee-Lee. That was awesome. You changed people\'s lives tonight. Techno tried to defile the metal, but techno was proven wrong. Cause he who is sleazy, is easy to pleasy. Punk-rock tried to kill the metal. He rocks too hard because he\'s not a mortal man. We know you\'re all robots and we don\'t care Tenacious D, we reign! Whooooahahaha! Dude, I totally miss you. And then after the smoke is cleared, and the rubble has been swept away, me and KG will peek out our heads. Sometimes you have to say please. They must pay the rent, with their rock. I\'m the devil, I love metal. He rocks too hard because he\'s not a mortal man. Do you believe there are robots living among us? New-wave tried to kill the metal. If me and Lee and KG could be three, flying free tenaciously. New-wave tried to kill the metal. We are fuelled by Satan, yes we\'re schooled by Satan. Cause it\'s the pick... of destiny. You\'ve disobeyed my orders, son, Why were you ever born? I am not one of you. I come from an ancient time. I am known as The Kicker of Elves. I am also known as The Angel Crusher. Long live me, I poisoned your wine. I\'m the devil, I love metal. Last week, Kyle quit the band. But now we\'re back together. Cause he who is sleazy, is easy to pleasy. Better, closer, warmer. You\'ve disobeyed my orders, son, Why were you ever born? The sun doth shine and the moon doth glow. The second decree: no more pollution, no more car exhaust, or ocean dumpage. From now on, we will travel in tubes! Cuz the land of love and freedom is just a baby\'s breath away. If we hold hands together, we can take back the USA. Sometimes you have to say please. High above the mucky-muck, castle made of clouds. There sits Wonderboy, sitting oh so proudly. Better, closer, warmer. He rocks too hard because he\'s not a mortal man. The sun doth shine and the moon doth glow. Do you think it will make us um, more attractive to the ladies? How about the power to kill a yak, from 200 yards away, with mind-bullets? Do you believe in God? I did not mean to blow your mind. Yeah that was awesome. Compared to bull***t. What we got is gonna turn your brain into s**t Whooooahahaha! What we got is gonna turn your brain into s**t Yeah that was awesome. Compared to bull***t. The sun doth shine and the moon doth glow. You\'ve disobeyed my orders, son, Why were you ever born? We\'ll lead as Two Kings, We\'ll f***in\' lead as Two Kings. And then after the smoke is cleared, and the rubble has been swept away, me and KG will peek out our heads. Lee-Lee-Lee Lee-Lee Lee-Lee-Lee-Lee. I\'m tryin\' to watch my calorie intake. We know you\'re all robots and we don\'t care Tenacious D, we reign! In Venice Beach there was a man named Kage. Dude. In Venice Beach there was a man named Kage. This is just a tribute. I\'m not gonna cook it but I\'ll order it from Zanzibar. Cuz the land of love and freedom is just a baby\'s breath away. If we hold hands together, we can take back the USA. Last week, Kyle quit the band. But now we\'re back together. We are fuelled by Satan, yes we\'re schooled by Satan. I did not mean to blow your mind. We know you\'re all robots and we don\'t care Tenacious D, we reign! Do you think it will make us um, more attractive to the ladies? Do you believe there are robots living among us? They must pay the rent, with their rock. We know you\'re all robots and we don\'t care Tenacious D, we reign! Cuz the land of love and freedom is just a baby\'s breath away. If we hold hands together, we can take back the USA. Techno tried to defile the metal, but techno was proven wrong. Let\'s take a dip in the strawberry river! And then after the smoke is cleared, and the rubble has been swept away, me and KG will peek out our heads. Whooooahahaha! How about the power to kill a yak, from 200 yards away, with mind-bullets? High above the mucky-muck, castle made of clouds. There sits Wonderboy, sitting oh so proudly. If me and Lee and KG could be three, flying free tenaciously. are you willing to make the commitment to wakin\' up at the crack a\' noon, for deep-knee rock squats!? Seven or eight at a time, in a row? Your brother\'s 10x better than you Jesus loves him more. The second decree: no more pollution, no more car exhaust, or ocean dumpage. From now on, we will travel in tubes! Hail Satan. We are fuelled by Satan, yes we\'re schooled by Satan. That was awesome. You changed people\'s lives tonight. I\'m not gonna cook it but I\'ll order it from Zanzibar. New-wave tried to kill the metal. I am not one of you. I come from an ancient time. I am known as The Kicker of Elves. I am also known as The Angel Crusher.</p></div></div>');}]);})(window.angular);