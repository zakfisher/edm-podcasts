//Express server for dev
require('newrelic');

var express = require('express')
var app = express();
var routes = require('./routes');

app.set('port', (process.env.PORT || 9292));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});

//Fall back to angular routes
app.get('/', routes.index);
// app.get('*', routes.index);
