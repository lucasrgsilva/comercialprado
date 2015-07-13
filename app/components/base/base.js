/**
 * Home configure module state view
 * @author Rafael Antonio Lucio <rafaelantioniolucio@gmail.com>
 */
(function () {
	'use strict';

	angular.module('comercialprado').config(baseConfig);

	baseConfig.$inject = ['$stateProvider'];

	function baseConfig($stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				views: {
					'header': {
						templateUrl: 'components/header/partials/header.html',
						controller: 'HeaderController',
						controllerAs: 'header'
					},
					'products': {
						templateUrl: 'components/products/partials/products.html',
						controller: 'ProductsController',
						controllerAs: 'products'
					},
					'footer': {
						templateUrl: 'components/footer/partials/footer.html',
						controller: 'FooterController',
						controllerAs: 'footer'
					}
				}
			});
	}
})();