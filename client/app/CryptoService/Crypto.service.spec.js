'use strict';

describe('Service: Crypto', function() {
  // load the service's module
  beforeEach(module('3dpsApp.Crypto'));

  // instantiate service
  var Crypto;
  beforeEach(inject(function(_Crypto_) {
    Crypto = _Crypto_;
  }));

  it('should do something', function() {
    expect(!!Crypto).toBe(true);
  });
});
