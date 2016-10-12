var menu = {
  templateUrl: './menu.html',
  controller: 'MenuCtrl'
};

angular
  .module('components.menu')
  .component('menu', menu)
  .config(function($stateProvider) {
    $stateProvider
      .state('menu', {
        parent: 'app',
        url:'^/menu',
        component: 'menu'
      });
  });
