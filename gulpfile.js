var gulp = require('gulp');
var karma = require('karma');

// need this to prevent the pipe from breaking on errors, and continue
// watching files for changes.
var plumber = require('gulp-plumber');

var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function() {
    return gulp.src('./src/app/app.js')
        .pipe(plumber())
        .pipe(webpack(webpackConfig), null, function(err, stats) {
            console.log(stats);
        })
        .pipe(gulp.dest('./www'))
});

gulp.task('tdd', function(cb) {
    var server = new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, cb);
    server.start()
});

gulp.task('test', function(cb) {
    var server = new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, cb);
    server.start()
});

// @TODO
// production build

gulp.task('default', ['webpack']);
