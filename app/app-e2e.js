describe('app launch', function () {

  var width = 1920;
  var height = 1080;
  browser.driver.manage().window().setSize(width, height);

  it('should load up the app', function () {
    browser.get('http://127.0.0.1:9292');
    expect(browser.getTitle()).toEqual('Westfield Wayfinding');
  });
});