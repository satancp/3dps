'use strict';

describe('Component: Main4chineseComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.main4chinese'));

  var Main4chineseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Main4chineseComponent = $componentController('main4chinese', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
