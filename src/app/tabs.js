let tabs = {

  transclude: true,

  controller: function() {
    this.tabs = [{
      label: 'random',
      url: 'https://source.unsplash.com/random'
    }, {
      label: 'buildings',
      url: 'https://source.unsplash.com/category/buildings/'
    }, {
      label: 'food',
      url: 'https://source.unsplash.com/category/food/'
    }, {
      label: 'nature',
      url: 'https://source.unsplash.com/category/nature/'
    }, {
      label: 'technology',
      url: 'https://source.unsplash.com/category/technology/'
    }, {
      label: 'people',
      url: 'https://source.unsplash.com/category/people/'
    }, {
      label: 'objects',
      url: 'https://source.unsplash.com/category/objects/'
    }];

    console.log(this.tabs.length);
    //add tab
    this.addTab = function addTab(tab) {
      this.tabs.push(tab);
    };

    //select tab... called with ng-click
    //sets selected property to true
    this.selectTab = function selectTab(index) {
      for (var i = 0; i < this.tabs.length; i++) {
        this.tabs[i].selected = false;
      }
      this.tabs[index].selected = true;
    };

  
    // gets called when all
    // children have been rendered
    // inside the component
    // NOT a substitute for directives DOM manipulation
    this.$postLink = function() {
      this.selectTab(0);
    };


  },

  template: `
    <div class='tabs'>
      <ul class='tabs__list'>

        <li ng-repeat='tab in $ctrl.tabs track by $index'>
        <a href=''
          ng-bind='tab.label'
          ng-click='$ctrl.selectTab($index);'></a>
        </li>
      </ul>
          <div class='tabs__content' ng-if='$ctrl.content.selected' ng-transclude>
          </div>
    </div>
  `
};

angular
  .module('app')
  .component('tabs', tabs);