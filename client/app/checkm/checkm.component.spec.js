'use strict';

describe('Component: CheckmComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.checkm'));

  var CheckmComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CheckmComponent = $componentController('checkm', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
