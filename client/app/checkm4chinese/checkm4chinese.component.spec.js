'use strict';

describe('Component: Checkm4chineseComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.checkm4chinese'));

  var Checkm4chineseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Checkm4chineseComponent = $componentController('checkm4chinese', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
