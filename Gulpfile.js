/**
 * Gulp Application render
 */

var gulp = require('gulp');

var url = require('url');
var del = require('del');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var minifycss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var proxy = require('proxy-middleware');
var karma = require('karma').server;
var reload = browserSync.reload;

var src = {
	scripts: 'app/scripts/**/*.js',
	scss: 'app/styles/**/*.scss',
	images: 'app/images/**/*',
	index: 'app/index.html',
	error: 'app/404.html',
	favicon: 'app/favicon.ico'
};

/**
 * IMAGEMIN Gulp Task
 */
gulp.task('images', function () {
	return gulp.src(src.images)
		.pipe(imagemin({
			optimizationLevel: 5
		}))
		.pipe(gulp.dest('dist/images'));
});

/**
 * SASS Gulp Task
 */
gulp.task('sass', function () {
	return gulp.src(src.scss)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(concat('styles.min.css'))
		.pipe(gutil.env.type === 'production' ? minifycss({
			compatibility: 'ie8'
		}) : gutil.noop())
		.pipe(gulp.dest('dist/styles'))
		.pipe(reload({
			stream: true
		}));
});

/**
 * SCRIPTS Gulp Task
 */
gulp.task('scripts', function () {
	return gulp.src(src.scripts)
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.min.js'))
		.pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/scripts'));
});

/**
 * Watch SCRIPTS Gulp Task 
 */
gulp.task('scripts-watch', ['scripts'], reload);

/**
 * JSHINT Gulp Task
 */
gulp.task('jshint', function () {
	return gulp.src(src.scripts)
		.pipe(jshint())
		.pipe(gulp.dest(jshint.reporter('jshint-stylish')));
});

/**
 * TDD Tests Gulp Task
 */
gulp.task('test', function (done) {
	karma.start({
		configFile: __dirname + '/karma.conf.js'
	}, done);
});

/**
 * CLEAN Gulp Task
 */
gulp.task('clean', function (cb) {
	del([
		'dist/styles',
		'dist/scripts',
		'dist/images',
		'dist/fonts',
		'dist/index.html',
		'dist/404.html',
		'dist/favicon.ico'
	], cb);
});

/**
 * SERVE Gulp Task
 */
gulp.task('serve', ['sass', 'scripts', 'images'], function () {

	var proxyOptions = url.parse('http://localhost:4000');
	proxyOptions.route = '/service';

	browserSync.init({
		server: {
			baseDir: './app',
			port: 3000,
			middleware: [proxy(proxyOptions)]
		}
	});

	gulp.watch(src.scss, ['sass']);
	gulp.watch(src.images, ['images']);
	gulp.watch(src.scripts, ['scripts-watch']);
	gulp.watch(src.index).on('change', reload);
	gulp.watch(src.error).on('change', reload);
});

/**
 * DEFAULT Gulp Task
 */
gulp.task('default', ['clean', 'serve'], function () {
	gulp.src(src.index)
		.pipe(gulp.dest('dist/'));
	gulp.src(src.error)
		.pipe(gulp.dest('dist/'));
	gulp.src(src.favicon)
		.pipe(gulp.dest('dist/'));
});