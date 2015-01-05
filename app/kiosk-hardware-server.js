// Dev config override here
var MAC = false;
var proximity = false;


// Requirements
var express = require('express'),
  app = express(),
  cors = require('cors');


// Express setup
app.set('port', (process.env.PORT || 8082));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);


// Global CORS
app.options('*', cors());
app.get('*', cors());


// Routes
app.get('/', function (req, res) {
  res.send('Kiosk hardware server');
});

app.get('/kiosk', function (req, res) {
  if (!MAC) {
    require('getmac').getMac(function (err, macAddress) {
      if (!err) {
        MAC = macAddress;
      } else {
        MAC = false;
      }
    });
  }
  res.json({
    MAC: MAC
  });
});

app.get('/proximity', function (req, res) {
  if (!proximity) {
    proximity = 14; // @todo call cgi script here
  }
  res.json({
    proximity: proximity
  });
});


// Fire it up
app.listen(app.get('port'), function () {
  console.log("Kiosk hardware server running at localhost:" + app.get('port'));
});