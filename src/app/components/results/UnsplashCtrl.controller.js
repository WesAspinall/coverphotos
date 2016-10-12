function UnsplashCtrl(UnsplashService) {

  let vm = this;

  vm.list = '';
  vm.getData = getData;
  vm.activate = activate;
  // activate();

  function activate() {
    getData();
  }

  function getData() {

    return UnsplashService.getData().then((res) => {
      vm.list = res;
      console.log(vm.list);
      return vm.list;
    });

  }


}

angular
  .module('components.results')
  .controller('UnsplashCtrl', UnsplashCtrl);