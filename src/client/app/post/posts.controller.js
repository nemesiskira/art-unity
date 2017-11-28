(function() {
  'use strict';

  angular
    .module('app')
    .controller('PostsController', PostsController);

  PostsController.$inject = ['$http', '$routeParams'];

  function PostsController($http, $routeParams) {
  	var vm = this;

  	vm.idpost= $routeParams; 
  	console.log(vm.idpost);
  	active();

  	function active() {
  		$http({
  			method: 'GET',
  			url: 'http://localhost/artunity/post.php',
  			params: vm.idpost
  		}).then(function(respose) {
  			console.log(respose.data[0]);
  			vm.post = respose.data[0];
  		});
  	}
  }

})();

