if (process.env.NODE_ENV !== 'development') {
  require('newrelic');
}

var express = require('express')
var app = express();
var routes = require('./routes');

app.set('port', (process.env.PORT || 9292));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

//Fall back to angular routes
app.get('/', routes.index);
app.get('/weather', routes.weather);
// app.get('*', routes.index);

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});