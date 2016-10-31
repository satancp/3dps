'use strict';

var app = require('../..');
import request from 'supertest';

var newProperty;

describe('Property API:', function() {
  describe('GET /api/propertys', function() {
    var propertys;

    beforeEach(function(done) {
      request(app)
        .get('/api/propertys')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          propertys = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      propertys.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/propertys', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/propertys')
        .send({
          name: 'New Property',
          info: 'This is the brand new property!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newProperty = res.body;
          done();
        });
    });

    it('should respond with the newly created property', function() {
      newProperty.name.should.equal('New Property');
      newProperty.info.should.equal('This is the brand new property!!!');
    });
  });

  describe('GET /api/propertys/:id', function() {
    var property;

    beforeEach(function(done) {
      request(app)
        .get(`/api/propertys/${newProperty._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          property = res.body;
          done();
        });
    });

    afterEach(function() {
      property = {};
    });

    it('should respond with the requested property', function() {
      property.name.should.equal('New Property');
      property.info.should.equal('This is the brand new property!!!');
    });
  });

  describe('PUT /api/propertys/:id', function() {
    var updatedProperty;

    beforeEach(function(done) {
      request(app)
        .put(`/api/propertys/${newProperty._id}`)
        .send({
          name: 'Updated Property',
          info: 'This is the updated property!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedProperty = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedProperty = {};
    });

    it('should respond with the original property', function() {
      updatedProperty.name.should.equal('New Property');
      updatedProperty.info.should.equal('This is the brand new property!!!');
    });

    it('should respond with the updated property on a subsequent GET', function(done) {
      request(app)
        .get(`/api/propertys/${newProperty._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let property = res.body;

          property.name.should.equal('Updated Property');
          property.info.should.equal('This is the updated property!!!');

          done();
        });
    });
  });

  describe('PATCH /api/propertys/:id', function() {
    var patchedProperty;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/propertys/${newProperty._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Property' },
          { op: 'replace', path: '/info', value: 'This is the patched property!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedProperty = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedProperty = {};
    });

    it('should respond with the patched property', function() {
      patchedProperty.name.should.equal('Patched Property');
      patchedProperty.info.should.equal('This is the patched property!!!');
    });
  });

  describe('DELETE /api/propertys/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/propertys/${newProperty._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when property does not exist', function(done) {
      request(app)
        .delete(`/api/propertys/${newProperty._id}`)
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
