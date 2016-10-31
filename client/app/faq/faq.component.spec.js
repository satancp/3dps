'use strict';

describe('Component: FaqComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.faq'));

  var FaqComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FaqComponent = $componentController('faq', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
