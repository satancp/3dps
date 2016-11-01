'use strict';

describe('Component: Detailm4chineseComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.detailm4chinese'));

  var Detailm4chineseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Detailm4chineseComponent = $componentController('detailm4chinese', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
