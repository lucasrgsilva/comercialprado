/**
 * @author Rafael Antonio Lucio <rafaelantioniolucio@gmail.com>
 */
(function () {
	'use strict';

	angular.module('comercialprado').config(productsConfig);

	productsConfig.$inject = ['$stateProvider'];

	function productsConfig($stateProvider) {
		$stateProvider
			.state('products', {
				url: '/',
				views: {
					'products': {
						templateUrl: 'scripts/components/products/partials/products.html',
						controller: 'ProductsController',
						controllerAs: 'products'
					}
				}
			});
	}
})();
