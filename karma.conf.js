module.exports = function (config) {
  config.set({

    basePath: './',

    files: [
      'app/public/components/jquery/dist/jquery.min.js',
      'app/public/components/d3/d3.min.js',
      'app/public/components/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/public/components/angular-touch/angular-touch.js',
      'app/public/components/angular-sanitize/angular-sanitize.js',
      'app/public/components/angular-resource/angular-resource.js',
      'app/public/components/angular-ui-router/release/angular-ui-router.min.js',
      'app/public/components/famous/dist/famous-global.js',
      'app/public/components/famous-angular/dist/famous-angular.js',
      'app/public/components/jibestream-sdk/JMapCore.js',
      'app/public/assets/app.js',
      'app/**/*-spec.js'
    ],

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'
    ],

    singleRun: true

  });
};