var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Default task compiles CoffeeScript and SCSS
gulp.task('default', [ 'coffee', 'sass' ]);

// Compilers
gulp.task('coffee', function() {
	gulp.src('./src/assets/js/*.coffee', { sourcemaps: true })
		.pipe(coffee({ bare: true }))
		.pipe(gulp.dest('./src/assets/js'));
});

gulp.task('sass', function() {
	return gulp.src('./src/assets/css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./src/assets/css'));
});

// Watchers
gulp.task('coffee:watch', function() {
	gulp.watch('./src/assets/js/*.coffee', [ 'coffee' ]);
});

gulp.task('sass:watch', function() {
	gulp.watch('./src/assets/css/*.scss', [ 'sass' ]);
});