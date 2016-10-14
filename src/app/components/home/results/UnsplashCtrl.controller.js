function UnsplashCtrl($sce, $http) {

  let ctrl = this;
  ctrl.data = '';
  ctrl.getData = getData;
  ctrl.activate = activate;
  var API = '//localhost:8000/api/unsplash/photos';
  activate();

  function activate() {
    return getData();
  }

  function getData() {

    $http.get(API).then(function(res) {
      ctrl.data = res.data;
    });

  }


}

angular
  .module('results')
  .controller('UnsplashCtrl', UnsplashCtrl);