'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var propertyCtrlStub = {
  index: 'propertyCtrl.index',
  show: 'propertyCtrl.show',
  create: 'propertyCtrl.create',
  upsert: 'propertyCtrl.upsert',
  patch: 'propertyCtrl.patch',
  destroy: 'propertyCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var propertyIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './property.controller': propertyCtrlStub
});

describe('Property API Router:', function() {
  it('should return an express router instance', function() {
    propertyIndex.should.equal(routerStub);
  });

  describe('GET /api/propertys', function() {
    it('should route to property.controller.index', function() {
      routerStub.get
        .withArgs('/', 'propertyCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/propertys/:id', function() {
    it('should route to property.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'propertyCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/propertys', function() {
    it('should route to property.controller.create', function() {
      routerStub.post
        .withArgs('/', 'propertyCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/propertys/:id', function() {
    it('should route to property.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'propertyCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/propertys/:id', function() {
    it('should route to property.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'propertyCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/propertys/:id', function() {
    it('should route to property.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'propertyCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
