// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const persons = require('../models/person.js');

// const personRouter = express.Router();
// personRouter.use(bodyParser.json()) ;

// personRouter.route('/')
// .get((req,res,next) => {
//     persons.find({})    //find from mongoose find all return of find hanldled in dishes in then
//     .then((persons) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(persons);  //put dishes=result and reply with json file
//     }, (err) => next(err))  //handle error
//     .catch((err) => next(err));
// })

// .post((req, res, next) => {
//     persons.create(req.body)
//     .then((person) => {
//         console.log('person Created ', person);
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(person);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// })
   

// .delete((req, res, next) => {
//     persons.remove({})
//   .then((resp) => {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.json(resp);
//   }, (err) => next(err))
//   .catch((err) => next(err));    
// });



// personRouter.route('/:cin')
// .get((req,res,next) => {
//     persons.findOne({"cin" : req.params.cin })          //(req.params.cin)    //find from mongoose find all return of find hanldled in dishes in then
//     .then((person) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(person);  //put dishes=result and reply with json file
//     }, (err) => next(err))  //handle error
//     .catch((err) => next(err));
// })



//     module.exports = personRouter ; 
