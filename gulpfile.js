'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('lint', function () {
  return gulp.src('src/**/*.js')
              .pipe(jshint())
              .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function () {
  return gulp.src('src/**/*.js')
              .pipe(concat('app.js'))
              .pipe(gulp.dest('dist'))
              .pipe(rename('app.min.js'))
              .pipe(uglify())
              .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['lint', 'scripts']);
});



gulp.task('default', function() {

});