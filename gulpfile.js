'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var merge = require('utils-merge');
var chalk = require('chalk');
var gutil = require('gutil');
// var sourcemaps = require('gulp-sourcemaps');

function map_error(err) {
  if (err.fileName) {
    // regular error
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
      + ': '
      + 'Line '
      + chalk.magenta(err.lineNumber)
      + ' & '
      + 'Column '
      + chalk.magenta(err.columnNumber || err.column)
      + ': '
      + chalk.blue(err.description))
  } else {
    // browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message))
  }

  this.end()
}

function bundle_js(bundler) {
  return bundler.bundle()
    .on('error', function (err) {
            gutil.log(err.message);
            // browserSync.notify("Browserify Error!");
            this.emit("end");
        })
    .pipe(source('js/bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'));
}

gulp.task('watch', function () {
  var args = merge(watchify.args, {debug: true});
  var bundler = watchify(browserify('src/jsx/app.js', args)).transform(babelify);

  bundle_js(bundler);

  bundler.on('update', function () {
    bundle_js(bundler);
  });
});

gulp.task('js', function () {
  var bundler = browserify('src/jsx/app.js', {debug: true}).transform(babelify);

  return bundle_js(bundler);
});

gulp.task('js-production', function () {
  var bundleStream = browserify('src/jsx/app.js', {debug: true}).transform(babelify).bundle();

  bundleStream
    .pipe(source('js/bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
  gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('dist/css'));
})

gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('json', function () {
  gulp.src('src/json/**/*.json')
    .pipe(gulp.dest('dist/json'));
});



gulp.task('build', ['html', 'css', 'js', 'json']);

gulp.task('package', ['html', 'css', 'js-production']);


