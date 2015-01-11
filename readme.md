#Super Fantastic EDM Podcasts

- Tablet Interface
- Directory Interface
- 99% HTML frontend app, running on [Famo.us/Angular](https://famo.us/integrations/angular/)
- [Browserify](http://browserify.org) Is used to handle javscript requirements in a commonjs style.
- [Gulp](http://gulpjs.com) Handles javascript and SASS/CSS builds and [linting](http://jshint.com)
- Can build to a [Chrome App](https://developer.chrome.com/apps/about_apps). (deplyable as Chromebox/Chromebook app via chrome store) though,
- The kiosk is currently served from Heroku via the production pipeline

---
##Running and Developing Locally

First ensure you have [NodeJS](http://nodejs.org), and [Gulp](http://gulpjs.com) installed globally. Then…

Setup:

  	npm install

Run:

  	gulp start


Watches and build the app, run a local server at 9292, and runs [livereloard](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).

Note: There is currently a bug in gulp-watch which causes it to crash adding new directories to the watch path. If this happens, you just need to fire it up again with `gulp start`


###Node express server

Also in this package is a node-express server pointed to app/public. This is also run in the `gulp start` script

    node app/server

###On Bower

Bower is configured for installing packages to app/public/components, but packages are checked in to keep things simple, and to allow for non-bower packages to also live in components, such as Jibestream's SDK.

---

##Testing

###Unit tests

Setup:

    npm install

Run:

    gulp test

###End to end tests

Setup:

    npm install -g protractor
    webdriver-manager update

Run:

    webdriver-manager start
    protractor protractor.conf.js

---

##Chrome app

Gulp build will ensure app/public is fully built and has all dependencies for the app. Gulp release will zip up app/public ready to be uploaded to the Chrome store.


    gulp-build


###Deploying to Chrome store

`gulp release` will increase the version number in the npm package and the app manifest.json, then zip up the current state of the app (you may have to build the latest first). You will find "Wayfinding-[version number].zip" in ./dist ready to be deployed to the chrome store.

By default the point release is incremented. To increment minor and major versions use `gulp release-minor` and `gulp release-major`

Currently the app is managed with the westfield.andriod@gmail.com account (that's not a typo)
