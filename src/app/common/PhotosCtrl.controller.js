function PhotosCtrl($state, $cacheFactory) {

  var ctrl = this;
  ctrl.photoList = [];
  ctrl.url = 'https://source.unsplash.com/random/851x399?sig=';
  ctrl.getRandomInt = getRandomInt;
  ctrl.renderPhotos = renderPhotos;
  ctrl.morePhotos = morePhotos;
  // ctrl.getList = getList;
  // ctrl.keys = [];
  // ctrl.selectCategory = selectCategory;
  // ctrl.put = put;
  ctrl.cache = $cacheFactory('cacheId');
  // https://source.unsplash.com/category/{CATEGORY NAME}

  ctrl.$onInit = function() {

    // if (ctrl.cache.info().size == 0) {
    //   console.log('empty cache ... putting in photos to render');
    renderPhotos();
    // }


  };


  function getRandomInt(min, max) {
    min = Math.ceil(9000);
    max = Math.floor(0);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  function renderPhotos(index) {
    for (var i = 0; i < 5; i++) {
      ctrl.photoList.push(ctrl.url + getRandomInt());
    }
    console.log(ctrl.url);
    // ctrl.cache.put('key', ctrl.photoList);
  }

  //this belongs in a directive
  function morePhotos(index) {
    ctrl.photoList = [];
    for (var i = 0; i < ctrl.categories.length; i++) {
      ctrl.categories[i].selected = false;
    }
    ctrl.categories[index].selected = true;
    var cat = ctrl.categories[index].category;
    var clicked = ctrl.categories[index].selected;

    if (clicked && cat != 'random') {
      ctrl.url = 'https://source.unsplash.com/category/' + cat + '/851x399?sig=';
      for (var i = 0; i < 5; i++) {
        ctrl.photoList.push(ctrl.url + getRandomInt());
      }
    } else {
      ctrl.url = 'https://source.unsplash.com/random/851x399?sig=';
      for (var i = 0; i < 5; i++) {
        ctrl.photoList.push(ctrl.url + getRandomInt());
      }
    }

    console.log(cat);
    console.log(ctrl.photoList);
    // ctrl.cache.put('key', ctrl.photoList);
  }

  // function getList() {
  //   if (angular.isUndefined(ctrl.cache.get(key))) {
  //     ctrl.keys.push(value);
  //   }
  //   ctrl.cache.put(angular.isUndefined(value) ? null : value);
  // }

  function selectCategory() {
    // for (var i = 0; i < ctrl.categories.length; i++) {
    //   ctrl.categories[i].selected = false;
    // }
    // ctrl.categories[index].selected = true
    // var cat = ctrl.categories[index].category;
    // var clicked = ctrl.categories[index].selected;



    // if (clicked && cat != 'random') {
    //   ctrl.url = 'https://source.unsplash.com/category/' + cat + '/851x399?sig=';
    //   ctrl.catUrl = angular.copy(ctrl.url);
    // } else {
    //   ctrl.url = 'https://source.unsplash.com/random/851x399?sig=';
    //   $state.reload();
    // }

  };


  // function put(value) {
  // if (angular.isUndefined(ctrl.cache.get(key))) {
  //   ctrl.keys.push(value);
  // }
  // ctrl.cache.put(angular.isUndefined(value) ? null : value);
  // };

  ctrl.categories = [{
    category: 'random',
    selected: true
  }, {
    category: 'buildings',
    selected: false
  }, {
    category: 'food',
    selected: false
  }, {
    category: 'nature',
    selected: false
  }, {
    category: 'people',
    selected: false
  }, {
    category: 'technology',
    selected: false
  }, {
    category: 'objects',
    selected: false
  }];



}



angular
  .module('app')
  .controller('PhotosCtrl', PhotosCtrl);