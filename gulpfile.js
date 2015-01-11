var gulp = require('gulp'),
  pkg = require('./package.json'),
  chromeAppManifest = require('./app/public/manifest.json'),
  sass = require('gulp-sass'),
  jeditor = require('gulp-json-editor'),
  concat = require('gulp-concat'),
  ngmin = require('gulp-ngmin'),
  clean = require('gulp-clean'),
  plumber = require('gulp-plumber'),
  jshint = require('gulp-jshint'),
  livereload = require('gulp-livereload'),
  browserify = require('gulp-browserify'),
  nodemon = require('gulp-nodemon'),
  stylish = require('jshint-stylish'),
  brfs = require('brfs'),
  karma = require('karma').server,
  stringify = require('stringify'),
  zip = require('gulp-zip'),
  notify = require('gulp-notify'),
  shell = require('gulp-shell'),
  server = require('gulp-develop-server'),
  watch = require('gulp-watch');

var paths = {
  app: ["./app"],
  modules: ["./app/modules"],
  app: ["./app/modules/app"],
  images: [
    "./app/modules/**/*.png",
    "./app/modules/**/*.jpg",
    "./app/modules/**/*.jpeg",
    "./app/modules/**/*.svg",
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
    .pipe(sass({
      loadPath: ['./app/modules/**'],
      // errLogToConsole: true
    }))
    .pipe(gulp.dest('./app/public/assets'));
});

gulp.task('lint', function () {
  return gulp.src(paths.modules + '/**/*.js')
    .pipe(plumber())
    .pipe(jshint({
      lookup: true
    }))
    .pipe(jshint.reporter(stylish))
    .pipe(notify(function (file) {
      if (file.jshint.success) {
        // Don't show something if success
        return false;
      }
      var errors = file.jshint.results.map(function (data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }));
});

gulp.task('images', function () {
  return gulp.src(paths.images)
    .pipe(gulp.dest('app/public/images'));
});

gulp.task('app-js', function () {
  return gulp.src('app/app.js')
    .pipe(plumber())
    .pipe(browserify({
      transform: [stringify('.html')]
    }))
    .pipe(gulp.dest('./app/public/assets'));
});


var makeRelease = function (rtype) {
  var v,
    currentVersion = pkg.version.split('.');
  switch (rtype) {
  case 'point':
    v = parseInt(currentVersion[2], 10);
    v++;
    currentVersion[2] = v;
    break;
  case 'minor':
    v = parseInt(currentVersion[1], 10);
    v++;
    currentVersion[1] = v;
    currentVersion[2] = 0;
    break;
  case 'major':
    v = parseInt(currentVersion[0], 10);
    v++;
    currentVersion = [v, 0, 0];
    break;
  }
  currentVersion = currentVersion.join('.');
  //Update NPM Package
  gulp.src("./package.json")
    .pipe(jeditor({
      'version': currentVersion
    }))
    .pipe(gulp.dest("./"));

  //Update Chrome Package
  gulp.src("./app/public/manifest.json")
    .pipe(jeditor({
      'version': currentVersion
    }))
    .pipe(gulp.dest("./app/public"))

  //Zip up release
  gulp.src('app/public/**/*')
    .pipe(zip('Wayfinding-' + currentVersion + '.zip'))
    .pipe(gulp.dest('dist'));

  console.log('Version number now at', currentVersion);

};

gulp.task('release-major', function () {
  makeRelease('major');
});
gulp.task('release-minor', function () {
  makeRelease('minor');
});
gulp.task('release', function () {
  makeRelease('point');
});

gulp.task('zip', function () {
  gulp.src('app/public/**/*')
    .pipe(zip('Wayfinding-' + pkg.version + '.zip'))
    .pipe(gulp.dest('dist'));
});

//Tasks
gulp.task('default', function () {
  console.log('\n\nAvailable Gulp Tasks:\n\nbuild: js, lint, sass etc.\nstart: builds on file change, livereload support\nrelease, release-minor, release-major: zips up app package to ./dist\n\n');
  console.log('See gulpfile.js for more\n\n');
});

gulp.task('build', ['clean', 'sass', 'lint', 'app-js', 'images']);

gulp.task('start', function () {

  // Mock Kiosk Hardware Server
  // (uses a different server launcher because gulp-develop-server and gulp-nodemon both only support a single server instance)
  server.listen({
    path: './app/kiosk-hardware-server.js'
  });

  // App Server
  nodemon({
    script: 'app/server.js',
    ext: 'html js',
    env: {
      'NODE_ENV': 'development'
    },
    ignore: ['app/public/**/*']
  });

  livereload.listen();

  watch('app/**/*.scss', function () {
    gulp.start('sass');
  });
  watch(paths.images, function () {
    gulp.start('images');
  });
  gulp.watch(['app/app.js', 'app/modules/**/*.js', 'app/modules/**/*.html'], function () {
    gulp.start(['lint', 'app-js']);
  });
  gulp.watch('app/*.js', function () {
    server.restart();
  });
  watch('app/public/**', function () {
    livereload.changed();
  });
});

gulp.task('test', function (done) {
  // karma.start({
  //   configFile: __dirname + '/karma.conf.js',
  //   singleRun: true
  // }, done);
});