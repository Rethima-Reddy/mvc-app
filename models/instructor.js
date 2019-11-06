const mongoose = require('mongoose')

const InstructorSchema = new mongoose.Schema({

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
  salary: {
    type: Number,
    minlength: 3,
    maxlength: 100,
    required: true,
    default: 100
  },
  GitHub: {
    type: String,
    minlength: 4,
    maxlength: 100,
    required: true,
    default: 'http://github.com'
  }

})

module.exports = mongoose.model('Instructor', InstructorSchema )
