function UnsplashCtrl(UnsplashService) {

  let vm = this;

  vm.list = '';
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
  .controller('UnsplashCtrl', UnsplashCtrl);