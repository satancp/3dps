'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var cryptoCtrlStub = {
  index: 'cryptoCtrl.index',
  show: 'cryptoCtrl.show',
  create: 'cryptoCtrl.create',
  upsert: 'cryptoCtrl.upsert',
  patch: 'cryptoCtrl.patch',
  destroy: 'cryptoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var cryptoIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './crypto.controller': cryptoCtrlStub
});

describe('Crypto API Router:', function() {
  it('should return an express router instance', function() {
    cryptoIndex.should.equal(routerStub);
  });

  describe('GET /api/cryptos', function() {
    it('should route to crypto.controller.index', function() {
      routerStub.get
        .withArgs('/', 'cryptoCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/cryptos/:id', function() {
    it('should route to crypto.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'cryptoCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/cryptos', function() {
    it('should route to crypto.controller.create', function() {
      routerStub.post
        .withArgs('/', 'cryptoCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/cryptos/:id', function() {
    it('should route to crypto.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'cryptoCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/cryptos/:id', function() {
    it('should route to crypto.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'cryptoCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/cryptos/:id', function() {
    it('should route to crypto.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'cryptoCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
