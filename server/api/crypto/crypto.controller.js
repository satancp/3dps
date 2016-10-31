/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cryptos              ->  index
 * POST    /api/cryptos              ->  create
 * GET     /api/cryptos/:id          ->  show
 * PUT     /api/cryptos/:id          ->  upsert
 * PATCH   /api/cryptos/:id          ->  patch
 * DELETE  /api/cryptos/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Crypto from './crypto.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity[0].value);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Cryptos
export function index(req, res) {
  return Crypto.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}
