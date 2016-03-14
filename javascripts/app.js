require.config({
	paths: {
		jquery: '../node_modules/jquery/dist/jquery.min',
		lodash: '../node_modules/lodash/lodash.min',
		moment: '../node_modules/moment/min/moment.min',
		moment_locale: '../node_modules/moment/locale/pt-br',
		promise: '../node_modules/q/q',
		bootstrap: '../node_modules/bootstrap/dist/js/bootstrap.min'
	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		},
		lodash: {
			exports: '_'
		}
	}
});