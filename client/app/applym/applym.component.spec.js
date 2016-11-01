'use strict';

describe('Component: ApplymComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.applym'));

  var ApplymComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ApplymComponent = $componentController('applym', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
