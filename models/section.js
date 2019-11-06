const mongoose = require('mongoose')
const SectionSchema = new mongoose.Schema({
_id:{
    type: Number,
    required: true
},
SectioNumber: {
    type: String,
    required : true,
    minlength:02,
    maxlength:05,
    default : "01",
    unique : true
},
Days: {
    type : String,
    required : true,
    minlength:06,
    maxlength:15,
    default:"MWF"
},
StartTime: {
    type : Number,
    minlength:2,
    maxlength:10,
    required:true,
    default:1200,
    unique:true,
},
RoomNumber:{
    type : String,
     minlength: 7,
     maxlength: 15,
     required : true,
     default : "CH 1200",
     unique : true,
},
CourseID : {
    type: Number,
    required: true,
},
InstructorID : {
    type : Number,
    required : true,
}
})
module.exports = mongoose.model('Section', SectionSchema)