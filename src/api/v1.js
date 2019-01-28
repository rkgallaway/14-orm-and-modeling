'use strict';

const express = require('express');
const modelFinder = require('../middleware/model-finder.js');

const router = express.Router();
router.param('model', modelFinder);

// ROUTES
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handlePut);
router.delete('/api/v1/model/:id', handleDelete);

// FUNCTIONS
/**
 *handles get all
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handleGetAll(req,res,next) {
  req.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch( next );
}

/**
 *handles get one
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handleGetOne(req,res,next) {
  req.model.get(req.params.id)
    .then( result => res.status(200).json(result[0]) )
    .catch( next );
}


// echo '{"name":"sprocket","type":"Spacely", "price":"100", "category":"Jetsons"}' |http POST :3000/api/v1/products
/**
 *handles post
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handlePost(req,res,next) {
  req.model.post(req.body)
    .then( result => res.status(200).json(result) )
    .catch( next );
}


/**
 *handles put
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handlePut(req,res,next) {
  req.model.put(req.params.id, req.body)
    .then( result => res.status(200).json(result) )
    .catch( next );
}

/**
 *handles delete
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handleDelete(req,res,next) {
  req.model.delete(req.params.id)
    .then( result => res.status(200).json(result) )
    .catch( next );
}

module.exports = router;
