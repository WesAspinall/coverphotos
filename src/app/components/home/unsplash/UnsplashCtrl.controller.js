function UnsplashCtrl() {

  let vm = this;
  vm.title = 'results';
  vm.getPhoto = getPhoto;
  vm.activate = activate;
  activate();

  function activate() {
    getPhoto();
  }

  function getPhoto() {
    vm.photoUrl1 = 'https://source.unsplash.com/?buildings,miami';
  }


}

angular
  .module('unsplash')
  .controller('UnsplashCtrl', UnsplashCtrl);