var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass'),
  watch = require('gulp-watch'),
  sass = require('gulp-ruby-sass');

 




// Connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});


// Styles
// ===================================================


// Compass
gulp.task('compass', function () {
  gulp.src('app/sass/*.scss')
    .pipe(sass({ compass: true}))
    .pipe(gulp.dest('app/dist/css'))
    .pipe(connect.reload())

}); 


// Html
gulp.task('html', function() {
	gulp.src('app/*.html')
		.pipe(connect.reload())
});


// Watch
gulp.task('watch',function(){
	gulp.watch('app/*.html', ['html'])
	gulp.watch('app/sass/*.scss', ['compass'])
});


// Default
gulp.task('default', ['connect', 'watch', 'html', 'compass']);
