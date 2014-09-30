#Westfield Wayfinding Kiosk Prototype

- Chome app. (for browser and Chromebox)
- Tablet Interface
- Directory Interface

###Running Locally

First ensure you have npm, bower and gulp installed globally. Then

  	npm install
  	bower install
  	gulp watch

###Building HTML5 chrome app

    gulp-build

###Deploying to Chrome store

`gulp release` will increase the version number in the npm package and the app manifest.json, then zip up the current state of the app (you may have to build the latest first). You will find "Wayfinding-[version number].zip" in ./dist ready to be deployed to the chrome store. Currently the app is managed with the westfield.andriod@gmail.com account

###Node express server

Also in this package is a node-express server pointed to app/public. Used in prototyping for serving up framer.js interactive wireframe prototypes and local testing of app.

    node app/server