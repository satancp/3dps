'use strict';

describe('Service: PropertyService', function() {
  // load the service's module
  beforeEach(module('3dpsApp.PropertyService'));

  // instantiate service
  var PropertyService;
  beforeEach(inject(function(_PropertyService_) {
    PropertyService = _PropertyService_;
  }));

  it('should do something', function() {
    expect(!!PropertyService).toBe(true);
  });
});
