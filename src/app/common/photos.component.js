var photos = {
  templateUrl: './photos.html',
  controller: 'PhotosCtrl'
};

angular
  .module('app')
  .component('photos', photos);