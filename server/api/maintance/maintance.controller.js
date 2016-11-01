/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/maintances              ->  index
 * POST    /api/maintances              ->  create
 * GET     /api/maintances/:id          ->  show
 * PUT     /api/maintances/:id          ->  upsert
 * PATCH   /api/maintances/:id          ->  patch
 * DELETE  /api/maintances/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Maintance from './maintance.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
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

function handleEntityNotFoundSpecial(res) {
  return function(entity) {
    if (!entity[0]) {
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

// Gets a list of Maintances
export function index(req, res) {
  return Maintance.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Maintance from the DB
export function show(req, res) {
  return Maintance.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Maintance in the DB
export function create(req, res) {
  return Maintance.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Creates a new Maintance in the DB
export function upload(req, res) {
  var fs = require('fs');
  fs.createReadStream(req.files.file.path).pipe(fs.createWriteStream('./client/assets/images/' + req.files.file.name));
}

export function checkM(req, res) {
  return Maintance.find({publish_user:req.body.id}).populate('publish_user').exec()
    .then(handleEntityNotFoundSpecial(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Upserts the given Maintance in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Maintance.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Maintance in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Maintance.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Maintance from the DB
export function destroy(req, res) {
  return Maintance.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
