const { src, dest, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');

function js() {
  return src('app/js/script_09.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js/'));
}

function css() {
  return src('app/css/style.css')
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist/css/'));
}



exports.default = parallel(js, css);
