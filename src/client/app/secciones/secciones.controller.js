(function() {
  'use strict';

  angular
    .module('app')
    .controller('seccionesController', seccionesController);

  seccionesController.$inject = ['$http'];

  function seccionesController($http) {
  	var vm = this;

  	active();

  	function active() {
  		$http.get('http://localhost/artunity/conexion.php').then(function(data) {
        console.log(data);
  			vm.posts = data.data;
  		});
  	}
  }

})();
