
var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

gulp.task('hello', function(){
    console.log('Hello Zell');
});

gulp.task('useref', function(){
    return gulp.src('/TP1_05/*.html')
      .pipe(useref())
      //.pipe(gulpIf('*.js', uglify()))
      // Minifies only if it's a CSS file
      .pipe(gulpIf('/TP1_05/*.css', cssnano()))
      .pipe(gulp.dest('/TP1_05/dist'))
  });