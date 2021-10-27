const gulp = require('gulp');
const { src, dest, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');

function js() {
  return src('app/js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js/'));
}

function css() {
  return src('app/styles/*.css')
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist/css/'));
}

function fonts() {
  return src('app/fonts/**/*')
    .pipe(dest('dist/fonts/'));
}

exports.default = parallel(js, css, fonts);

// exports.css = css;