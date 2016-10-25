function PhotosCtrl() {
  var vm = this;
  vm.url = 'https://source.unsplash.com/category/nature/851x399?sig=';
  vm.quantity = '';
  vm.photoList = [];
  vm.getRandomInt = getRandomInt;
  vm.renderPhotos = renderPhotos;

  this.$postLink = function() {
    return renderPhotos();
  };

  function getRandomInt(min, max) {
    var min = Math.ceil(9000);
    var max = Math.floor(0);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function renderPhotos() {
    var photoList = vm.photoList;
    var url = vm.url;
    for(var i = 0; i < 5; i++) {
      photoList.push(url+getRandomInt());
    } 
    return vm.photoList;
  }


}

angular
  .module('app')
  .controller('PhotosCtrl', PhotosCtrl);