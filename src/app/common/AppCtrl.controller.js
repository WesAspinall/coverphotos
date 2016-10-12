function AppCtrl() {
  var vm = this;
  vm.hello = 'hedlo';

  vm.data = [
    'Home',
    'About Us',
    'Menu',
    'Catering',
    'Community Events',
    'Locations',
    'Contact Us'
  ];


}

angular
  .module('app')
  .controller('AppCtrl', AppCtrl);