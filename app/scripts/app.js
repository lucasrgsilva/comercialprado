(function () {
	'use strict';

	/**
	 * @author Rafael Antonio Lucio <rafaelantoniolucio@gmail.com>
	 */

	angular.module('comercialprado', [
		'ui.router',
		'restangular'
	]);
	
	angular.module('comercialprado')
		.config(Config)
		.run(Run);


})();
