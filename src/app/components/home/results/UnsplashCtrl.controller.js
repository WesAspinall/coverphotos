function UnsplashCtrl(UnsplashService) {

  let ctrl = this;
  ctrl.getData = getData;
  ctrl.activate = activate;
  activate();

  function activate() {
    return getData();
  }

  function getData() {
    UnsplashService.getData().then((res) => {
      return console.log(res);
    });
  }


}

angular
  .module('results')
  .controller('UnsplashCtrl', UnsplashCtrl);