/**
 * @author Rafael Antonio Lucio <rafaelantioniolucio@gmail.com>
 */
(function () {
	'use strict';

	angular.module('comercialprado').controller('ProductsController', ProductsController);

	ProductsController.$inject = [];

	function ProductsController() {
		console.log(this);
	}
})();
