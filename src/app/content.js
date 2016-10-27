let content = {

  bindings: {
    label: '@'
  },

  require: {
    tabs: '^^tabs'
  },

  transclude: true,
  template: `
    <div class='tabs__content' ng-if='$ctrl.content.selected'>
    <div ng-transclude></div>
    </div>
  `,
  controller: function() {

    this.content = {
      label: this.label,
      selected: false
    };

    
    this.$onInit = function () {
      this.tabs.addTab(this.content);
    };
  }
};

angular
  .module('app')
  .component('content', content);
