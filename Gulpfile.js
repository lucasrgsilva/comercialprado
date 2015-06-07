var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	del = require('del'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload,
	karma = require('karma').server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
	karma.start({
		configFile: __dirname + '/karma.conf.js'
	}, done);
});

/**
 * Should compile sass files, running autoprefixer, running remane and minify css
 */
gulp.task('styles', function () {
	return sass('app/styles/main.scss', {
			style: 'expanded'
		})
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifyCss({
			compatibility: 'ie8'
		}))
		.pipe(gulp.dest('dist/css'))
});

/**
 * Should compile js files, running jsHint, running concat all js file,
 * running remane, running remove with sufix .min and running uglify
 */
gulp.task('scripts', function () {
	return gulp.src('app/scripts/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

/**
 * Should copy images to dist path/images
 */
gulp.task('images', function () {
	return gulp.src('app/images/**/*')
		.pipe(gulp.dest('dist/images'))
});


/**
 * Should copy fonts to dist path/fonts
 */
gulp.task('fonts', function () {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});


/**
 * Should clean dist path
 */
gulp.task('clean', function (cb) {
	del(['dist/css', 'dist/js', 'dist/images', 'dist/fonts'], cb)
});

/**
 * Should running all config tasks on gulp.task
 */
gulp.task('default', ['clean'], function () {
	gulp.start('styles', 'scripts', 'images', 'fonts');
});

/**
 * Should running browserSync
 */
gulp.task('serve', ['sass'], function () {

	browserSync.init({
		server: './app'
	});

	gulp.watch('app/styles/*.scss', ['sass']);
	gulp.watch('app/*.html').on('change', reload);
});

/**
 * Should compile all sass files and reload when change files
 */
gulp.task('sass', function () {
	return sass('app/styles/main.scss', {
			style: 'expanded'
		})
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('app/styles'))
		.pipe(reload({
			stream: true
		}));
});
