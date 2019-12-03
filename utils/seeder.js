const Datastore = require('nedb') // set up a temporary (in memory) database
const courseData = require('../data/courses.json') // read in data file
const instructorData = require('../data/instructors.json') // read in data file
const sectionData = require('../data/section.json') //read in section data
const studentData = require('../data/students.json') //read in student data

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections

  db.developers = new Datastore() // new object property
  db.developers.loadDatabase() // call the loadDatabase method

  

  db.courses = new Datastore() // new object property
  db.courses.loadDatabase() // call the loadDatabase method
  db.courses.insert(courseData)

  db.instructors = new Datastore() // new object property
  db.instructors.loadDatabase() // call the loadDatabase method
  db.instructors.insert(instructorData)

  db.section = new Datastore() // new object property
  db.section.loadDatabase() // call the loadDatabase method
  db.section.insert(sectionData)

  db.students = new Datastore() // new object property
  db.students.loadDatabase() // call the loadDatabase method
  db.students.insert(studentData)

  // initialize app.locals (these objects are available to the controllers)
  
  app.locals.courses = db.courses.find(courseData)
  app.locals.instructors = db.instructors.find(instructorData)
  app.locals.section = db.section.find(sectionData)
  app.locals.students = db.students.find(studentData)

  
  console.log(`${app.locals.courses.query.length} courses seeded`)
  console.log(`${app.locals.instructors.query.length} instructors seeded`)
  console.log(`${app.locals.section.query.length} section seeded`)
  console.log(`${app.locals.students.query.length} students seeded`)
  console.log('END Data Seeder. Sample data read and verified.')
}
