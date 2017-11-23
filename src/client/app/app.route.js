(function() {
  angular
    .module('app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl : 'app/home/home.html',
          controller: 'controller',
          controllerAs: 'vm'
        })
        .when('/secciones', {
          templateUrl : 'app/secciones/secciones.html',
          controller: 'seccionesController',
          controllerAs: 'vm'
        })
        .when('/post', {
          templateUrl : 'app/post/post.html',
          controller: 'PostsController',
          controllerAs: 'vm'
        })
        .when('/musica', {
          templateUrl : 'app/musica/musica.html'
        })
        .when('/blogs', {
          templateUrl: 'app/blogs/blogs.html'
        });
    });
})();
