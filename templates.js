angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./root.html','<div class="root"><div id="root-view" ui-view></div></div>');
$templateCache.put('./app.html','<div class="app"><hero></hero><div id="main"><div id="content"><div id="wrapper"><div class="box" ui-view></div></div></div></div></div>');
$templateCache.put('./hero.html','<div class="hero"><div><h1>unsplash image search</h1></div><search-bar></search-bar></div>');
$templateCache.put('./search-bar.html','<div>hello from search bar</div>');
$templateCache.put('./results.html','<div><div class="home-content"><p>placeholder</p></div></div>');}]);