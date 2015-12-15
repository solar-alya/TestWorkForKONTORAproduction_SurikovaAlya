var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css');

gulp.task('sass', function () {
  gulp.src('./styles/saas/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
});
 
gulp.task('concatCss', function () {
  return gulp.src('styles/css/**/*.css')
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('./styles'));
});

gulp.task('minify-css', function() {
  return gulp.src('./styles/main.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./'));
});


gulp.task('watch', function () {
    gulp.watch('./styles/saas/*.scss', ['sass']);
    gulp.watch('styles/css/**/*.css', ['concatCss']);
    gulp.watch('./styles/main.css', ['minify-css']);
});

gulp.task('default', ['concatCss','sass','minify-css','watch']);
