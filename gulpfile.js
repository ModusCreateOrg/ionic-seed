var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sh = require('shelljs');
var webpack = require('webpack-stream');

var paths = {
  es6: ['./src/js/**/*.js'],
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['webpack', 'sass']);

gulp.task('webpack', function() {
  return gulp.src('./src/js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./www/js/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.es6, ['webpack']);
});
