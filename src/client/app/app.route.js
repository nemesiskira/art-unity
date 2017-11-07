(function() {
  angular
    .module('app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl : 'app/home/home.html'
        })
        .when('/secciones', {
          templateUrl : 'app/secciones/secciones.html'
        })
        .when('/post', {
          templateUrl : 'app/post/post.html'
        })
        .when('/musica', {
          templateUrl : 'app/musica/musica.html'
        })
        .when('/blogs', {
          templateUrl: 'app/blogs/blogs.html'
        });
    });
})();
