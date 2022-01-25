const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const persons = require('../models/person.js');

const personRouter = express.Router();
personRouter.use(bodyParser.json()) ;
personRouter.route('/')
.get((req,res,next) => {
    persons.find({})    //find from mongoose find all return of find hanldled in dishes in then
    .then((persons) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(persons);  //put dishes=result and reply with json file
    }, (err) => next(err))  //handle error
    .catch((err) => next(err));
})

.post((req, res, next) => {
    persons.create(req.body)
    .then((person) => {
        console.log('person Created ', person);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(person);
    }, (err) => next(err))
    .catch((err) => next(err));
})
   
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
})

.delete((req, res, next) => {
    persons.remove({})
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));    
});



personRouter.route('/:cin')
.get((req,res,next) => {
    persons.findById(req.params.cin)    //find from mongoose find all return of find hanldled in dishes in then
    .then((person) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(person);  //put dishes=result and reply with json file
    }, (err) => next(err))  //handle error
    .catch((err) => next(err));
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes');
})
   
.put((req, res, next) => {
    persons.findByIdAndUpdate(req.params.cin, {$set : req.body} , {new: true}) //new:true to return new updates
    .then((person) => {
        console.log('persons Created ', person);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(person);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    persons.findByIdAndRemove(req.params.cin)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));    
});

module.exports = personRouter ; 