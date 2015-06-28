// Karma configuration
// Generated on Sat Jun 06 2015 10:05:18 GMT-0300 (BRT)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			// libs
			'app/bower_components/jquery/dist/jquery.js',
			'app/bower_components/lodash/lodash.js',
			'app/bower_components/moment/moment.js',
			'app/bower_components/angular/angular.js',
			'app/bower_components/angular-mocks/angular-mocks.js',
			'app/bower_components/restangular/dist/restangular.js',
			'app/bower_components/angular-animate/angular-animate.js',
			'app/bower_components/angular-cookies/angular-cookies.js',
			'app/bower_components/angular-translate/angular-translate.js',
			'app/bower_components/angular-ui-router/release/angular-ui-router.js',
			// application
			'app/scripts/app.js',
			'app/scripts/**/*.js',
			// partials
			'app/scripts/**/*.html',
			// tests
			'test/**/*.js'
		],

		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		ngHtml2JsPreprocessor: {
			stripPrefix: 'app/',
			moduleName: 'comercialprado'
		},

		preprocessors: {
			'app/**/*.html': ['ng-html2js']
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],

		plugins: [
			'karma-jasmine',
			'karma-mocha-reporter',
			'karma-phantomjs-launcher',
			'karma-ng-html2js-preprocessor'
		],

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	});
};
