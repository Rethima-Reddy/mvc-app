/**
*  Course model
*  Describes the characteristics of each attribute in a course resource.
*
* @author RethimaReddy Polam<S537157@NWMISSOURI.EDU>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  SchoolNumber: {
   type: String,
   minlength: 5,
   maxlength: 10,
   required: true,
   unique: true,
   default: '44'
  },
  CourseNumber: {
   type: String,
   minlength: 5,
   maxlength: 10,
   required: true,
   unique: true,
   default: '563'  
  },
  Name: {
  type: String,
  minlength: 10,
  maxlength: 100,
  required: true,
  unique: true,
  default: 'Developing Web Apps and Services'
  },
  inSpring: {
  type: boolean,
  required: true,
  default: false
  },
  inSummer: {
  type: boolean,
  required: true,
  default: false
  },
  infall: {
  type: boolean,
  required: true,
  default: false
  }
})
module.exports = mongoose.model('Course', CourseSchema)
