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
  watch = require('gulp-watch');

var paths = {
  app: ["./app"],
  modules: ["./app/modules"],
  client: ["./app/modules/client"],
  images: [
    "./app/modules/**/*.png",
    "./app/modules/**/*.jpg",
    "./app/modules/**/*.jpeg",
    "./app/modules/**/*.gif"
  ]
};

gulp.task('clean', function () {
  return gulp.src('app/public/assets', {
      read: false
    })
    .pipe(clean());
});

gulp.task('sass', function () {
  return gulp.src(['./app/application.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./app/public/assets'));
});

gulp.task('lint', function () {
  return gulp.src(paths.modules + '/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('views', function () {
  return gulp.src([paths.client + '**/*.html'])
    .pipe(gulp.dest('app/public/assets/templates'));
});

gulp.task('images', function () {
  return gulp.src(paths.images)
    .pipe(gulp.dest('app/public/assets'));
});

gulp.task('js', function () {
  return gulp.src('app/client.js')
    .pipe(browserify())
    .pipe(gulp.dest('./app/public/assets'));
});


//Tasks
gulp.task('default', ['clean', 'sass', 'lint', 'js']);

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('app/**/*.scss', ['sass']);
  gulp.watch('app/modules/*.html', ['views']);
  gulp.watch(paths.images, ['images']);
  gulp.watch('app/modules/**/*.js', ['lint', 'js']);
  gulp.watch('app/public/**').on('change', livereload.changed);
});