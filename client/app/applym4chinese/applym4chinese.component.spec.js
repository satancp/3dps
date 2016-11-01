'use strict';

describe('Component: Applym4chineseComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.applym4chinese'));

  var Applym4chineseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Applym4chineseComponent = $componentController('applym4chinese', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
