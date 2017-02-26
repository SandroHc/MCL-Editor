var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Default task compiles CoffeeScript and SCSS
gulp.task('default', [ 'coffee', 'sass' ]);

// Compilers
gulp.task('coffee', function() {
	var scripts = [
			'./src/assets/js/config.coffee',
			'./src/assets/js/assets.coffee',
			'./src/assets/js/functions.coffee',
			'./src/assets/js/actors.coffee',
			'./src/assets/js/functions_populate.coffee',
			'./src/assets/js/functions_events.coffee',
			'./src/assets/js/i18n.coffee',
			'./src/assets/js/main.coffee'
		],
		dest = './src/dist/js';

	gulp.src(scripts, { sourcemaps: true })
		.pipe(coffee({ bare: true, sourcemaps: true }))
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest(dest))
		.pipe(rename('bundle.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(dest));

	// Compile language files
	gulp.src('./src/assets/js/lang.*.coffee', { sourcemaps: true })
		.pipe(coffee({ bare: true, sourcemaps: true }))
		.pipe(gulp.dest(dest));
		//.pipe(uglify())
		//.pipe(gulp.dest(dest));
});

gulp.task('sass', function() {
	return gulp.src('./src/assets/css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./src/dist/css'));
});

// Watchers
gulp.task('coffee:watch', function() {
	gulp.watch('./src/assets/js/*.coffee', [ 'coffee' ]);
});

gulp.task('sass:watch', function() {
	gulp.watch('./src/assets/css/*.scss', [ 'sass' ]);
});