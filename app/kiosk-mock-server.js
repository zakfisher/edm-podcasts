var express = require('express')
var app = express();
var routes = require('./kiosk-mock-routes');

app.set('port', (process.env.PORT || 8082));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

//Fall back to angular routes
app.get('/', routes.index);
app.get('/kiosk', routes.kiosk);
app.get('/proximity', routes.proximity);
// app.get('*', routes.index);

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});