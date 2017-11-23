(function() {
  'use strict';

  angular
    .module('app')
    .controller('PostsController', PostsController);

  PostsController.$inject = ['$http'];

  function PostsController($http) {
  	var vm = this;

  	active();

  	function active() {
  		$http.get('http://localhost/artunity/conexion.php').then(function(data) {
  			console.log(data);
  		});
  	}
  }

})();
