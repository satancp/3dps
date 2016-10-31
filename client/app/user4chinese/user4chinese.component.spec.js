'use strict';

describe('Component: User4chineseComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.user4chinese'));

  var User4chineseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    User4chineseComponent = $componentController('user4chinese', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
