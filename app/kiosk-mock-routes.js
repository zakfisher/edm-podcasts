exports.index = function (req, res) {
  res.send('Kiosk mock server');
}

var mac = 'dev-landscape';

exports.kiosk = function (req, res) {
  // require('getmac').getMac(function (err, macAddress) {
  //   console.log(err, macAddress);
  //   if (!err) {
  //     mac = macAddress;
  //   }
  //   res.json({
  //     MAC: mac
  //   });
  // });

  res.json({
    MAC: mac
  });
};

exports.proximity = function (req, res) {
  res.json({
    distance: 14
  });
};