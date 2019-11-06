const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/developers.json') // read in data file
const instructorData = require('../data/instructors.json') // read in data file
const courseData = require('../data/courses.json') // read in data file

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  console.log('START data seeder with course data')
  const db = {} // empty object to hold all collections

  db.developers = new Datastore() // new object property
  db.developers.loadDatabase() // call the loadDatabase method
  
  db.instructors = new Datastore() // new object property
  db.instructors.loadDatabase() // call the loadDatabase method

  // for course module
  db.courses = new Datastore()
  db.courses.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.developers.insert(developerData)
  db.instructors.insert(instructorData)
  // for Course module  
  db.courses.insert(courseData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.developers = db.developers.find(developerData)
  console.log(`${app.locals.developers.query.length} developers seeded`)
  app.locals.instructors = db.instructors.find(instructorData)
  console.log(`${app.locals.instructors.query.length} instuctors seeded`)
  // for Course module
  app.locals.courses = db.courses.find(courseData)
  console.log(`${app.locals.instructors.query.length} course seeded`)


  console.log('END Data Seeder. Sample data read and verified.')











}
