var hero = {
  templateUrl: './hero.html',
  controller: 'AppCtrl'
};

angular
  .module('app')
  .component('hero', hero);