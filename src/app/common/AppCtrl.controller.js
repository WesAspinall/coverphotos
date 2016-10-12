function AppCtrl() {
  var vm = this;
  vm.hello = 'hedlo';


}

angular
  .module('app')
  .controller('AppCtrl', AppCtrl);