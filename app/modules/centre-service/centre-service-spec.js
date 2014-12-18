beforeEach(module('wfWayfinding'));

describe('centre service', function () {
  var CentreService,
    centre;

  centre = {
    id: 'myCentre'
  };

  beforeEach(inject(function (_CentreService_) {
    CentreService = _CentreService_;
  }));

  it('should get and set a centre', function () {
    CentreService.setCentre(centre);
    expect(CentreService.getCentre()).toBe(centre);
  });

});