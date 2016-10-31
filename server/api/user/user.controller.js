/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/users              ->  index
 * POST    /api/users              ->  create
 * GET     /api/users/:id          ->  show
 * PUT     /api/users/:id          ->  upsert
 * PATCH   /api/users/:id          ->  patch
 * DELETE  /api/users/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import User from './user.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function respondsignup(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function checkUser(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity[0]) {
      res.status(statusCode).json(entity[0]);
    }
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

// Gets a list of Users
export function index(req, res) {
  return User.find().populate('maintancelist.content').exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single User from the DB
export function show(req, res) {
  return User.findById(req.params.id).populate('maintancelist.content').exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new User in the  DB
export function create(req, res) {
  console.log("asd")
  return User.create(req.body)
    .then(respondsignup(res, 201))
    .catch(handleError(res));
}

// Login
export function login(req, res) {
  return User.find({username:req.body.username}).populate('maintancelist.content').exec()
    .then(handleEntityNotFoundSpecial(res))
    .then(checkUser(res))
    .catch(handleError(res));
}

// Updates an existing User in the DB
export function update(req, res) {
  User.findOne({ _id: req.params.id }, function (err, doc){
    doc.maintancelist = req.body;
    doc.save(function() {
      User.findById(req.params.id).populate('maintancelist.content').exec(function(err,result) {
        res.status(200).json(result);
      });
    });
  });
}

// Deletes a User from the DB
export function destroy(req, res) {
  return User.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
