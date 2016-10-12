function SideNavCtrl() {
  var vm = this;

  vm.links = [



  ];

  vm.hello = 'hello';
}



angular
  .module('app')
  .controller('SideNavCtrl', SideNavCtrl);