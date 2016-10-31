'use strict';

var app = require('../..');
import request from 'supertest';

var newMaintance;

describe('Maintance API:', function() {
  describe('GET /api/maintances', function() {
    var maintances;

    beforeEach(function(done) {
      request(app)
        .get('/api/maintances')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          maintances = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      maintances.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/maintances', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/maintances')
        .send({
          name: 'New Maintance',
          info: 'This is the brand new maintance!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newMaintance = res.body;
          done();
        });
    });

    it('should respond with the newly created maintance', function() {
      newMaintance.name.should.equal('New Maintance');
      newMaintance.info.should.equal('This is the brand new maintance!!!');
    });
  });

  describe('GET /api/maintances/:id', function() {
    var maintance;

    beforeEach(function(done) {
      request(app)
        .get(`/api/maintances/${newMaintance._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          maintance = res.body;
          done();
        });
    });

    afterEach(function() {
      maintance = {};
    });

    it('should respond with the requested maintance', function() {
      maintance.name.should.equal('New Maintance');
      maintance.info.should.equal('This is the brand new maintance!!!');
    });
  });

  describe('PUT /api/maintances/:id', function() {
    var updatedMaintance;

    beforeEach(function(done) {
      request(app)
        .put(`/api/maintances/${newMaintance._id}`)
        .send({
          name: 'Updated Maintance',
          info: 'This is the updated maintance!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedMaintance = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMaintance = {};
    });

    it('should respond with the original maintance', function() {
      updatedMaintance.name.should.equal('New Maintance');
      updatedMaintance.info.should.equal('This is the brand new maintance!!!');
    });

    it('should respond with the updated maintance on a subsequent GET', function(done) {
      request(app)
        .get(`/api/maintances/${newMaintance._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let maintance = res.body;

          maintance.name.should.equal('Updated Maintance');
          maintance.info.should.equal('This is the updated maintance!!!');

          done();
        });
    });
  });

  describe('PATCH /api/maintances/:id', function() {
    var patchedMaintance;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/maintances/${newMaintance._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Maintance' },
          { op: 'replace', path: '/info', value: 'This is the patched maintance!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedMaintance = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedMaintance = {};
    });

    it('should respond with the patched maintance', function() {
      patchedMaintance.name.should.equal('Patched Maintance');
      patchedMaintance.info.should.equal('This is the patched maintance!!!');
    });
  });

  describe('DELETE /api/maintances/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/maintances/${newMaintance._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when maintance does not exist', function(done) {
      request(app)
        .delete(`/api/maintances/${newMaintance._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
