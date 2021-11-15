------------------------------------------------------------------------------------------------
gulpfile.js
------------------------------------------------------------------------------------------------
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
  return src('app/css/*.css')
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist/css/'));
}

function fonts() {
  return src('app/fonts/**/*')
    .pipe(dest('dist/fonts/'));
}

exports.default = parallel(js, css, fonts);

------------------------------------------------------------------------------------------------
package.json
------------------------------------------------------------------------------------------------

{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.html",
  "scripts": {
    "test": ""
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "browser-sync": "^2.27.6",
    "del": "^6.0.0",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^8.0.0",
    "gulp-cache": "^1.1.3",
    "gulp-cssnano": "^2.1.3",
    "gulp-if": "^3.0.0",
    "gulp-imagemin": "^8.0.0",
    "gulp-sass": "^5.0.0",
    "gulp-sourcemaps": "^3.0.0",
    "gulp-uglify": "^3.0.2",
    "gulp-useref": "^5.0.0",
    "run-sequence": "^2.2.1"
  },
  "dependencies": {
    "gulp-rename": "^2.0.0"
  }
}
