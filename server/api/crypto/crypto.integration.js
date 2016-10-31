'use strict';

var app = require('../..');
import request from 'supertest';

var newCrypto;

describe('Crypto API:', function() {
  describe('GET /api/cryptos', function() {
    var cryptos;

    beforeEach(function(done) {
      request(app)
        .get('/api/cryptos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          cryptos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      cryptos.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/cryptos', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/cryptos')
        .send({
          name: 'New Crypto',
          info: 'This is the brand new crypto!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newCrypto = res.body;
          done();
        });
    });

    it('should respond with the newly created crypto', function() {
      newCrypto.name.should.equal('New Crypto');
      newCrypto.info.should.equal('This is the brand new crypto!!!');
    });
  });

  describe('GET /api/cryptos/:id', function() {
    var crypto;

    beforeEach(function(done) {
      request(app)
        .get(`/api/cryptos/${newCrypto._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          crypto = res.body;
          done();
        });
    });

    afterEach(function() {
      crypto = {};
    });

    it('should respond with the requested crypto', function() {
      crypto.name.should.equal('New Crypto');
      crypto.info.should.equal('This is the brand new crypto!!!');
    });
  });

  describe('PUT /api/cryptos/:id', function() {
    var updatedCrypto;

    beforeEach(function(done) {
      request(app)
        .put(`/api/cryptos/${newCrypto._id}`)
        .send({
          name: 'Updated Crypto',
          info: 'This is the updated crypto!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedCrypto = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCrypto = {};
    });

    it('should respond with the original crypto', function() {
      updatedCrypto.name.should.equal('New Crypto');
      updatedCrypto.info.should.equal('This is the brand new crypto!!!');
    });

    it('should respond with the updated crypto on a subsequent GET', function(done) {
      request(app)
        .get(`/api/cryptos/${newCrypto._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let crypto = res.body;

          crypto.name.should.equal('Updated Crypto');
          crypto.info.should.equal('This is the updated crypto!!!');

          done();
        });
    });
  });

  describe('PATCH /api/cryptos/:id', function() {
    var patchedCrypto;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/cryptos/${newCrypto._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Crypto' },
          { op: 'replace', path: '/info', value: 'This is the patched crypto!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedCrypto = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedCrypto = {};
    });

    it('should respond with the patched crypto', function() {
      patchedCrypto.name.should.equal('Patched Crypto');
      patchedCrypto.info.should.equal('This is the patched crypto!!!');
    });
  });

  describe('DELETE /api/cryptos/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/cryptos/${newCrypto._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when crypto does not exist', function(done) {
      request(app)
        .delete(`/api/cryptos/${newCrypto._id}`)
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
