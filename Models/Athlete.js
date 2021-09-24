const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let athleteSchema = new Schema({
  name: {
    type: String
  },
  journey: {
    type: Number
  },
  teamName: {
    type: String
  },
 totalTime: {
   type: Number
 },
  hours: {
      type: Number
  },
  minutes: {
    type: Number
  },
  seconds: {
    type: Number
  },
  location: {
      type: String
  },
  comment: {
      type: String
  },
  activity: {
    type: String
  },
  bib :{
    type: Number
  }
}, {
    collection: 'athletes'
  })

module.exports = mongoose.model('Athlete', athleteSchema)