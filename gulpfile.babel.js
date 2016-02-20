var gulp = require('gulp');
var notify = require("gulp-notify");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var postcss = require('gulp-postcss');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

let handleErrors = function() {
	let args = Array.prototype.slice.call(arguments);
	let err = {
		title: "Compile Error",
		message: "<%= error %>"
	};
	notify.onError(err).apply(this, args);
	this.emit('end');
};

gulp.task('browserify', () => {
	return browserify('./js/index.js', {debug: true})
		.transform(babelify)
		.bundle()
		.on('error', handleErrors)
		.on('error', function(err) {
	        console.log(err.message); 
	        console.log(err.stack);
	    })
		.pipe(source('bundle.js'))
		.pipe(notify('DONE browserify!!'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('css', () => {
    return gulp.src('./sass/main.scss')
    	.pipe(sass())
        .pipe(postcss([require('autoprefixer'), require('cssnano')]))
        .pipe(plumber())
		.pipe(notify('DONE CSS!!'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', ['browserify', 'css'], function() {
	gulp.watch('./js/**/*.js', ['browserify']);
	gulp.watch('./js/*.js', ['browserify']);
	
	gulp.watch('./sass/**/*.scss', ['css']);
	gulp.watch('./sass/*.scss', ['css']);
});

gulp.task('default', ['watch']);