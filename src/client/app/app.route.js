(function() {
  angular
    .module('app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl : 'app/home/home.html'
        })
        .when('/banana', {
          template: '<h1>Banana</h1><p>Bananas contain around 75% water.</p>'
        })
        .when('/tomato', {
          template: '<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>'
        });
    });
})();
