'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var maintanceCtrlStub = {
  index: 'maintanceCtrl.index',
  show: 'maintanceCtrl.show',
  create: 'maintanceCtrl.create',
  upsert: 'maintanceCtrl.upsert',
  patch: 'maintanceCtrl.patch',
  destroy: 'maintanceCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var maintanceIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './maintance.controller': maintanceCtrlStub
});

describe('Maintance API Router:', function() {
  it('should return an express router instance', function() {
    maintanceIndex.should.equal(routerStub);
  });

  describe('GET /api/maintances', function() {
    it('should route to maintance.controller.index', function() {
      routerStub.get
        .withArgs('/', 'maintanceCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/maintances/:id', function() {
    it('should route to maintance.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'maintanceCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/maintances', function() {
    it('should route to maintance.controller.create', function() {
      routerStub.post
        .withArgs('/', 'maintanceCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/maintances/:id', function() {
    it('should route to maintance.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'maintanceCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/maintances/:id', function() {
    it('should route to maintance.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'maintanceCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/maintances/:id', function() {
    it('should route to maintance.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'maintanceCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
