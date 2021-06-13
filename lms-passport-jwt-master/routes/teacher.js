var express = require('express');
var router = express.Router();
var authenticate = require('../authenticate');
const cors = require('./cors');

var Quiz = require('../models/quiz');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/viewQuiz', function(req, res, next) {
  // console.log("Hello")
  Quiz.find({}).populate('teacher').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});


router.get('/viewQuiz/:qid', function(req, res, next) {
  console.log("Hello")
  Quiz.find({ _id: req.params.qid }).populate('teacher').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});


router.post('/createQuiz',cors.cors, authenticate.verifyUser, function(req, res, next) {
  Quiz.create(req.body)
      .then((result) => {
          console.log('Quiz has been Added ', result);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(result);
      }, (err) => next(err))
      .catch((err) => next(err));
});

router.put('/addQuiz/:qid',cors.cors, function(req, res, next) {
  console.log(req.body)
  Quiz.findOneAndUpdate({ _id: req.params.qid }, {
          "$push": {
              "quiz": {
                  "question": req.body.question,
                  "options":req.body.options,
                  "answer":req.body.answer
              }
          }
      }, { new: true, upsert: false },
      function(error, results) {
          if (error) {
              return next(error);
          }
          // Respond with valid data
          res.json(results);
      });
});

router.delete('/deleteQuiz/:qid',cors.cors,  function(req, res, next) {
  Quiz.deleteOne({ _id: req.params.qid }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

module.exports = router;
