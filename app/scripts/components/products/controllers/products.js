/**
 * @author Rafael Antonio Lucio <rafaelantioniolucio@gmail.com>
 */
(function () {
	'use strict';

	angular.module('comercialprado').controller('ProductsController', ProductsController);

	ProductsController.$inject = ['Restangular'];

	function ProductsController(Restangular) {
		var vm = this;
		var users = Restangular.one('users');

		users.getList().then(function (users) {
			vm.users = users;
			console.log(vm.users);
		});
	}
})();
