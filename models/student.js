/**
*  Course model
*  Describes the characteristics of each attribute in a course resource.
*
* @author Mahender Reddy Surkanti<S537240@NWMISSOURI.EDU>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Family name'
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  GPA: {
      type: Number,
      minlength: 1,
      maxlength: 20,
      required: true,
      unique: false,
      default: 0
  },
  GitHub: {
      type: String,
      minlength: 4,
      maxlength: 100,
      required: true,
      default: 'https://github.com/Mahender1166'
  },
  WebSite: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true,
    default: 'http://www.yourwebsite.com'
  },
  SectionID: {
      type: Number,
      minlength: 01,
      maxlength: 10,
      required: true,
      unique: false,
      default: 30
  }
})
module.exports = mongoose.model('Student', StudentSchema)
