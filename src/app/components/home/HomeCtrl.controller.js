function HomeCtrl(HomeService) {

  let vm = this;

  vm.list = '';
  vm.getData = getData;
  vm.activate = activate;
  // activate();

  function activate() {
    getData();
  }

  function getData() {

    return HomeService.getData().then((res) => {
      vm.list = res;
      console.log(vm.list);
      return vm.list;
    });

  }


}

angular
  .module('components.home')
  .controller('HomeCtrl', HomeCtrl);