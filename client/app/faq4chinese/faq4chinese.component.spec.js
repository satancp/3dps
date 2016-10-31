'use strict';

describe('Component: Faq4chineseComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.faq4chinese'));

  var Faq4chineseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Faq4chineseComponent = $componentController('faq4chinese', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
