#Westfield Wayfinding Kiosk Prototype

- Tablet Interface
- Directory Interface
- Builds to a Chrome html app. (runs browser and installable Chromebox app)

###Running Locally

First ensure you have npm, bower and gulp installed globally. Then

  	npm install
  	bower install
  	gulp start

That will watch and build the app, run a local server at 9292, and run livereloard.

Note: There is currently a bug in gulp-watch which causes it to crash adding new directories to the watch path. If this happens, you just need to fire it up again with `gulp start`

###Building HTML5 chrome app

    gulp-build

###Deploying to Chrome store

`gulp release` will increase the version number in the npm package and the app manifest.json, then zip up the current state of the app (you may have to build the latest first). You will find "Wayfinding-[version number].zip" in ./dist ready to be deployed to the chrome store.

By default the point release is incremented. To increment minor and major versions use `gulp release-minor` and `gulp release-major`

Currently the app is managed with the westfield.andriod@gmail.com account (that's not a typo)

###Node express server

Also in this package is a node-express server pointed to app/public. Used in prototyping for serving up framer.js interactive wireframe prototypes and local testing of app. This is also run from `gulp start`

    node app/server

###Testing/Specs

  npm install -g protractor
  webdriver-manager update
  webdriver-manager start

  protractor test-conf.js

