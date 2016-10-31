'use strict';

describe('Component: Register4chineseComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.register4chinese'));

  var Register4chineseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Register4chineseComponent = $componentController('register4chinese', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
