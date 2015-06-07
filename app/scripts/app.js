(function () {
	'use strict';

	/**
	 * @author Rafael Antonio Lucio <rafaelantoniolucio@gmail.com>
	 */

	angular.module('comercialprado', [
		'ui.router',
		'ngCookies',
		'restangular',
		'pascalprecht.translate'
	]);

	angular.module('comercialprado')
		.config(Config)
		.run(Run);

	Config.$inject = ['$urlRouterProvider', '$translateProvider']

	function Config($urlRouterProvider, $translateProvider) {
		$translateProvider.preferredLanguage('pt-BR');
		$urlRouterProvider.otherwise('/');
	}

	Run.$inject = [
		'$rootScope',
		'$cookieStore',
		'$state'
	];

	function Run($rootScope, $cookieStore, $state) {}
})();
