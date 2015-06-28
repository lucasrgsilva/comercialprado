/**
 * @author Rafael Antonio Lucio <rafaelantioniolucio@gmail.com>
 */
(function () {
	'use strict';

	angular.module('comercialprado').controller('ProductsController', ProductsController);

	ProductsController.$inject = ['Products'];

	function ProductsController(Products) {
		var vm = this;

		Products.getList().then(function (products) {
			vm.products = products;
		});
	}
})();
