module.exports = angular.module('wfConfig', [])

.value('config', {
  API: {
    kioskID: 2348576,
    forecastIOapiKey: '9e39cf0f631c2bd05927bd364942a3e6'
  },
  UI: {
    preloaderTimeout: 500,
    weatherInterval: 5000,
    resetTimeout: 60000,
    screensaver: false,
    screensaverTimeout: 30000,
    placeholderContent: {
      storeFront: '/placeholder/valleyFair.jpg',
      logo: '/placeholder/logo.png'
    }
  },
  states: [
    {
      title: 'Map',
      subtitle: '',
      icon: 'wire-map-rev',
      type: 'kioskmap',
    },
    {
      title: 'Search',
      subtitle: 'Directory',
      icon: 'wire-search-rev',
      type: 'search'
    },
    {
      title: 'Shopping',
      subtitle: 'Directory',
      icon: 'wire-shopping-rev',
      type: 'shopping'
    },
    {
      title: 'Dining',
      subtitle: 'Directory',
      icon: 'wire-dining-rev',
      type: 'dining'
    } //,
    // {
    //   title: 'Services',
    //   subtitle: 'Directory',
    //   icon: 'wire-services-rev',
    //   type: 'services',
    //   disabled: true
    // },
    // {
    //   title: 'Events',
    //   subtitle: 'Calendar',
    //   icon: 'wire-see-rev',
    //   type: 'events',
    //   disabled: true
    // },
  ]
});