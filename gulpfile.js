var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  ngmin = require('gulp-ngmin'),
  clean = require('gulp-clean'),
  plumber = require('gulp-plumber'),
  jshint = require('gulp-jshint'),
  server = require('gulp-express'),
  livereload = require('gulp-livereload'),
  browserify = require('gulp-browserify'),
  stylish = require('jshint-stylish'),
  brfs = require('brfs'),
  stringify = require('stringify'),
  watch = require('gulp-watch');

var paths = {
  app: ["./app"],
  modules: ["./app/modules"],
  app: ["./app/modules/app"],
  images: [
    "./app/modules/**/*.png",
    "./app/modules/**/*.jpg",
    "./app/modules/**/*.jpeg",
    "./app/modules/**/*.gif"
  ]
};

gulp.task('clean', function () {
  return gulp.src(['app/public/assets', 'app/public/images'], {
      read: false
    })
    .pipe(clean());
});

gulp.task('sass', function () {
  return gulp.src(['./app/application.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./app/public/assets'));
});

gulp.task('lint', function () {
  return gulp.src(paths.modules + '/**/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('images', function () {
  return gulp.src(paths.images)
    .pipe(gulp.dest('app/public/images'));
});

gulp.task('js', function () {
  return gulp.src('app/app.js')
    .pipe(plumber())
    .pipe(browserify({
      transform: [stringify('.html')]
    }))
    .pipe(gulp.dest('./app/public/assets'));
});


//Tasks
gulp.task('default', ['clean', 'sass', 'lint', 'js', 'images']);

gulp.task('watch', function () {
  livereload.listen();
  watch('app/**/*.scss', function () {
    gulp.start('sass');
  });
  watch(paths.images, function () {
    gulp.start('images');
  });
  watch(['app/app.js', 'app/modules/**/*.js', 'app/modules/**/*.html'], function () {
    console.log('go');
    gulp.start(['lint', 'js']);
  });
  watch('app/public/**', function () {
    livereload.changed();
  });
});