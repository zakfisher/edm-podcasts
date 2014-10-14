var express = require('express')
var app = express();
var routes = require('./routes');

app.set('port', (process.env.PORT || 9292));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});

//Server side routes
app.get('/test_server', function (req, res) {
  res.send('server side test');
})

//Fall back to angular routes
app.get('/', routes.index);
app.get('*', routes.index);