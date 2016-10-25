function AppCtrl() {
  this.appTitle = 'Cover Photos';
}

angular
  .module('app')
  .controller('AppCtrl', AppCtrl);