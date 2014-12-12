exports.index = function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
};

exports.weather = function (req, res) {
	var Forecast = require('forecast.io');
	var options = {
	  // APIKey: process.env.FORECAST_API_KEY
	  APIKey: '9e39cf0f631c2bd05927bd364942a3e6'
	},
	forecast = new Forecast(options);
	// Valley Fair Coordinates
	var latitude = 37.325087;
    var longitude = -121.946273;
	forecast.get(latitude, longitude, function (err, response, data) {
	  if (err) throw err;
	  res.json(data);
	});
};