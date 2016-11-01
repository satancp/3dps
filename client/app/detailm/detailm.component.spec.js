'use strict';

describe('Component: DetailmComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.detailm'));

  var DetailmComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    DetailmComponent = $componentController('detailm', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
