var gulp = require('gulp');
var webpack = require('webpack-stream');
var del = require('del');

var paths = {
  es6: ['./src/js/**/*.js'],
  sass: ['./scss/**/*.scss'],
  html: ['./src/**/*.html'],
  index: ['./src/index.html'],
  platformBuildDir: ['./platforms/ios/www']
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

gulp.task('clean-www', function(cb) {
    del([paths.platformBuildDir], cb);
})

// takes our built `www` directory, and moves it into the
// platforms/ios/www directory so we can run on the device.
gulp.task('copy-www', function() {
    return gulp.src('./www/**')
        .pipe(gulp.dest('./platforms/ios/www'));
});

gulp.task('device', ['clean-www', 'copy-www']);

gulp.task('watch', function() {
  gulp.watch(paths.es6, ['webpack', 'copy-www']);
  gulp.watch(paths.html, ['webpack', 'copy-www']);
  gulp.watch(paths.index, ['index']);
});
