var appNav = {
  
  transclude: true,
  templateUrl: './app-nav.html',
  controller: 'NavCtrl'

}

angular
  .module('app')
  .component('appNav', appNav);