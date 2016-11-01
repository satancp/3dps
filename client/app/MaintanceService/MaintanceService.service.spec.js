'use strict';

describe('Service: MaintanceService', function() {
  // load the service's module
  beforeEach(module('3dpsApp.MaintanceService'));

  // instantiate service
  var MaintanceService;
  beforeEach(inject(function(_MaintanceService_) {
    MaintanceService = _MaintanceService_;
  }));

  it('should do something', function() {
    expect(!!MaintanceService).toBe(true);
  });
});
