function PicsCtrl() {
  this.message = 'hello';
  this.$onInit = function() {
    console.log(this.categories.categories);
  };

}

angular
  .module('app')
  .controller('PicsCtrl', PicsCtrl);