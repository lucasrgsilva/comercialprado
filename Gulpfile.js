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
	reload = browserSync.reload;

gulp.task('styles', function() {
	return sass('app/styles/main.scss', { style: 'expanded' })
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function() {
	return gulp.src('app/scripts/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('images', function() {
	return gulp.src('app/images/**/*')
		.pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean', function(cb) {
	del(['dist/css', 'dist/js', 'dist/images', 'dist/fonts'], cb)
});

gulp.task('default', ['clean'], function() {
	gulp.start('styles', 'scripts', 'images', 'fonts');
});

gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: './app'
	});

	gulp.watch('app/styles/*.scss', ['sass']);
	gulp.watch('app/*.html').on('change', reload);
});

gulp.task('sass', function() {
	return sass('app/styles/main.scss', { style: 'expanded' })
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('app/styles'))
		.pipe(reload({stream: true}));
});