/**
 * @author Rafael Antonio Lucio <rafaelantoniolucio@gmail.com>
 * Bootstrap AngularJs of apllication
 */
(function () {
	'use strict';

	/**
	 * module: comercialprado
	 * config: function 
	 * 		@param: ngAnimate
	 * 		@param: $urlRouterProvider
	 * 		@param: $translateProvider
	 * 		@description: Set default language and set default URL
	 * run: function
	 * 		@param: $rootScope
	 * 		@param: $cookieStore
	 * 		@param: $state
	 * 		@description: Set authentication sistem when access admin on sistem
	 */

	angular.module('comercialprado', [
		'ngAnimate',
		'ui.router',
		'ngCookies',
		'restangular',
		'pascalprecht.translate'
	]);

	angular.module('comercialprado')
		.config(Config)
		.run(Run);

	Config.$inject = ['$urlRouterProvider', '$translateProvider', 'RestangularProvider']

	function Config($urlRouterProvider, $translateProvider, RestangularProvider) {
		$translateProvider.preferredLanguage('pt-BR');
		$urlRouterProvider.otherwise('/');
		RestangularProvider.setBaseUrl('/service');
	}

	Run.$inject = [
		'$rootScope',
		'$cookieStore',
		'$state'
	];

	function Run($rootScope, $cookieStore, $state) {}
})();