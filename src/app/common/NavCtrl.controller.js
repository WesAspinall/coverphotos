function NavCtrl() {
  var ctrl = this;

  ctrl.selectCategory = selectCategory;


  function selectCategory(index) {
    for (var i = 0; i < ctrl.categories.length; i++) {
      ctrl.categories[i].selected = false;
    }
    ctrl.categories[index].selected = true;
    console.log(index, ctrl.categories[index]);
  };


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
  .controller('NavCtrl', NavCtrl);