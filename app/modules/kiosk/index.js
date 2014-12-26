module.exports = angular.module('wfKiosk', [])

.service('Kiosk', require('./kiosk.service'))

.run(function (Kiosk) {
  // Init kiosk service
  console.log(Kiosk);
});