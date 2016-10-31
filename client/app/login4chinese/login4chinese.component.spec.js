'use strict';

describe('Component: Login4chineseComponent', function() {
  // load the controller's module
  beforeEach(module('3dpsApp.login4chinese'));

  var Login4chineseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Login4chineseComponent = $componentController('login4chinese', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
