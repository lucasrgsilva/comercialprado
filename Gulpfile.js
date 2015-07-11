/**
 * Gulp Application render
 * @author Rafael Antonio Lucio <rafaelantoniolucio@gmail.com>
 */

var gulp = require('gulp');

/**
 * Gulp Utils utilizado para executar serviços globais.
 *
 * node-url
 * Este módulo tem utilitários de resolução de URL e análise significava ter 
 * paridade de recursos com o módulo url node.js núcleo. https://github.com/defunctzombie/node-url
 * 
 * del
 * Deleta arquivos/pastas usando globs https://github.com/sindresorhus/del
 *
 * gulp-util
 * Funções utilitárias para plugins gulp https://github.com/gulpjs/gulp-util
 *
 * gulp-concat
 * Este irá concatenar seus arquivos https://github.com/wearefractal/gulp-concat
 *
 * gulp-sourcemaps
 * Escrever mapas fonte em linha Mapas de origem inline são incorporadas no arquivo de origem. 
 * https://github.com/floridoo/gulp-sourcemaps
 */
var url = require('url');
var del = require('del');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

/**
 * Javacript
 *
 * gulp-jshint
 * Este é JSHint, uma ferramenta que ajuda a detectar erros e potenciais problemas no seu código JavaScript.
 * https://github.com/spalger/gulp-jshint
 *
 * gulp-uglify
 * Este minificará seus arquivos com UglifyJS2 https://github.com/terinjokes/gulp-uglify
 */
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

/**
 * gulp-imagemin
 * Minifica suas imagens PNG, JPEG, GIF and SVG https://github.com/sindresorhus/gulp-imagemin
 */
var imagemin = require('gulp-imagemin');

/**
 * gulp-sass
 * Compila seus arquivos sass https://github.com/dlmanning/gulp-sass
 *
 * gulp-minify-css
 * Minifica seus arquivos css com clean-css https://github.com/murphydanger/gulp-minify-css
 *
 * gulp-autoprefixer
 * Plugin para analisar CSS e adicionar vendor prefixes usando valores de Can I Use. http://caniuse.com/
 * https://github.com/sindresorhus/gulp-autoprefixer
 */
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

/**
 * borser-sync
 * Browsersync faz seu ajustes e testa mais rápido sincronizando alterações de arquivos e interações entre vários 
 * dispositivos.
 * http://www.browsersync.io/
 *
 * proxy-middleware
 * Utilizei para criar um "proxy transparente", "A 'proxy transparente' é um proxy que não modifique o pedido ou 
 * resposta para além do que é necessário para a autenticação e identificação do proxy". O proxy-middleware permite 
 * quaisquer solicitação de opções sendo permitidos em HTTP ou HTTPS.
 * https://github.com/andrewrk/node-proxy-middleware
 *
 * karma
 * Uma ferramenta simples que lhe permite testar código JavaScript em vários navegadores reais. https://github.com/karma-runner/karma
 */
var browserSync = require('browser-sync').create();
var proxy = require('proxy-middleware');
var karma = require('karma').server;

var src = {
	scripts: 'app/scripts/**/*.js',
	scss: 'app/styles/**/*.scss',
	images: 'app/images/**/*',
	html: 'app/**/*.html'
};

gulp.task('clean', function (cb) {
	del(['dist/**/*'], cb);
});

gulp.task('test', function (done) {
	karma.start({
		configFile: __dirname + '/karma.conf.js'
	}, done);
});

gulp.task('jshint', function () {
	return gulp.src(src.scripts)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', ['jshint'], function () {
	return gulp.src(src.scripts)
		.pipe(sourcemaps.init())
		.pipe(concat('scripts.min.js'))
		.pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/scripts'));
});

gulp.task('sass', function () {
	return gulp.src(src.scss)
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(sourcemaps.init())
		.pipe(sass({
			style: 'expanded'
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('app/styles'))
		.pipe(concat('styles.min.css'))
		.pipe(gutil.env.type === 'production' ? minifycss({
			compatibility: 'ie8'
		}) : gutil.noop())
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());
});

gulp.task('images', function () {
	return gulp.src(src.images)
		.pipe(imagemin({
			optimizationLevel: 5
		}))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('serve', ['images', 'sass', 'jshint', 'scripts'], function () {

	var proxyOptions = url.parse('http://localhost:4000');
	proxyOptions.route = '/service';

    browserSync.init({
        server: {
            baseDir: './app',
			middleware: [proxy(proxyOptions)]
        }
    });

    gulp.watch(src.html).on('change', browserSync.reload);
    gulp.watch(src.scripts, ['scripts']).on('change', browserSync.reload);
    gulp.watch(src.scss, ['sass']).on('change', browserSync.reload);
});

gulp.task('default', ['clean', 'serve']);