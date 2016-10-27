var unsplashPics = {

  bindings: {
    category: '@'
  },
  
  require: {
    categories: '^^appNav'
  },

  transclude: true,

  templateUrl: './unsplash-pics.html',
  controller: 'PicsCtrl'
}

angular
  .module('app')
  .component('unsplashPics', unsplashPics);