let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Athlete Model
let athleteSchema = require('../models/Athlete');

// CREATE Athlete
router.route('/create-athlete').post((req, res, next) => {
  athleteSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Athletes
router.route('/').get((req, res) => {
  athleteSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// // Get Single athlete
// router.route('/edit-athlete/:id').get((req, res) => {
//   athleteSchema.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// Update Athlete
router.route('/update-athlete/:id').put((req, res, next) => {
  athleteSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Athlete updated successfully !')
    }
  })
})

// Delete athlete
router.route('/delete-athlete/:id').delete((req, res, next) => {
  athleteSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;