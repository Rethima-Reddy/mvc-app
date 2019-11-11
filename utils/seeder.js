const Datastore = require('nedb') // set up a temporary (in memory) database
const instructorData = require('../data/instructors.json') // read in data file
const courseData = require('../data/courses.json') // read in data file
const studentData = require('../data/students.json') // read in data file
const sectionData = require('../data/sections.json')//read in data file
// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  console.log('START data seeder with course data')
  const db = {} // empty object to hold all collections

  // for instructors module
  db.instructors = new Datastore() // new object property
  db.instructors.loadDatabase() // call the loadDatabase method
  // for Section module
  db.sections = new Datastore() // new object property
  db.sections.loadDatabase() // call the loadDatabase method
  
  // for course module
  db.courses = new Datastore()
  db.courses.loadDatabase() // call the loadDatabase method
  
  // for Student module
  db.students = new Datastore() // new object property
  db.students.loadDatabase() // call the loadDatabase method

  // for instructor module
  db.instructors.insert(instructorData)
  // for section module
  db.sections.insert(sectionData)
  // for Course module  
  db.courses.insert(courseData)
  // for Student module  
  db.students.insert(studentData)

  // initialize app.locals (these objects are available to the controllers)
  // for instructors module
  app.locals.instructors = db.instructors.find(instructorData)
  console.log(`${app.locals.instructors.query.length} instuctors data seeded`)
  // for sections module
  app.locals.sections = db.sections.find(sectionData)
  console.log(`${app.locals.sections.query.length} sections data seeded`)
  // for Course module
  app.locals.courses = db.courses.find(courseData)
  console.log(`${app.locals.instructors.query.length} course data seeded`)
  // for Student module
  app.locals.students = db.students.find(studentData)
  console.log(`${app.locals.students.query.length} Student data seeded`)


  console.log('END Data Seeder. Sample data read and verified.')











}
