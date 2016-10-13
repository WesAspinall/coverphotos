function UnsplashCtrl($http) {

  let vm = this;
  vm.title = 'results';

 
  vm.getPhoto = getPhoto;
  vm.activate = activate;
  activate();

  function activate() {
    getPhoto();
  }


  function getPhotos() {
    
  }

  function getPhoto() {

    vm.photoUrl1 = 'https://source.unsplash.com/1024x1024?buildings,miami';
    vm.photoUrl2 = 'https://source.unsplash.com/1024x1024?nature,aksfdj';

    console.log(vm.photoUrl);
  }


}

angular
  .module('unsplash')
  .controller('UnsplashCtrl', UnsplashCtrl);