function NavCtrl() {
  var ctrl = this;
  ctrl.test = 'test from NavCtrl';

  ctrl.selectCategory = selectCategory;

  ctrl.foo = function() {
    console.log('test from NavCtrl');
  };

  ctrl.categories = [{
    category: 'random',
    selected: true,
    url: 'https://source.unsplash.com/random/851x315'
  }, {
    category: 'buildings',
    selected: false,
    url: 'https://source.unsplash.com/category/buildings/851x315'
  }, {
    category: 'food',
    selected: false,
    url: 'https://source.unsplash.com/category/food/851x315'
  }, {
    category: 'nature',
    selected: false,
    url: 'https://source.unsplash.com/category/nature/851x315'
  }, {
    category: 'people',
    selected: false,
    url: 'https://source.unsplash.com/category/people/851x315'
  }, {
    category: 'technology',
    selected: false,
    url: 'https://source.unsplash.com/category/technology/851x315'
  }, {
    category: 'objects',
    selected: false,
    url: 'https://source.unsplash.com/category/objects/851x315'
  }]


  function selectCategory(index) {
    for (var i = 0; i < ctrl.categories.length; i++) {
      ctrl.categories[i].selected = false;
    }
    ctrl.categories[index].selected = true;
  };

}

angular
  .module('app')
  .controller('NavCtrl', NavCtrl);