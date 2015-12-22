var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sh = require('shelljs');
var webpack = require('webpack-stream');

var paths = {
  es6: ['./src/js/**/*.js'],
  sass: ['./scss/**/*.scss'],
  index: ['./src/index.html']
};

gulp.task('default', ['webpack', 'index']);

gulp.task('webpack', function() {
  return gulp.src('./src/js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./www/js/'));
});


// simply copy the index over to /www
// could add more complex stuff here if need be.
gulp.task('index', function() {
    return gulp.src(paths.index)
        .pipe(gulp.dest('./www'));
});

gulp.task('watch', function() {
  gulp.watch(paths.es6, ['webpack']);
  gulp.watch(paths.index, ['index']);
});
