/**
 * @router.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')

console.log('START routing')
const router = express.Router()

// Manage top-level request first
router.get('/', (req, res, next) => {
  console.log('Request to /')
  // res.sendFile('index')
  res.render('index')
})

router.get('/index', (req, res, next) => {
  console.log('Request to /index')
  // res.sendFile('index.html')
  res.render('index')

})

// Defer path requests to a particular controller

// Defer path requests to a course controller
router.use('/course', require('../controllers/course.js'))

// Manage top-level request first
router.get('/course', (req, res, next) => {
  // res.sendFile('index.html')
  res.render('index')
})

// Defer path requests to a instructor controller
router.use('/instructor', require('../controllers/instructor.js'))

// Manage top-level request first
router.get('/instructor', (req, res, next) => {
  // res.sendFile('index.html')
  res.render('index')
})

// Defer path requests to a section controller
router.use('/section', require('../controllers/section.js'))

// Manage top-level request first
router.get('/section', (req, res, next) => {
  // res.sendFile('index.html')
  res.render('index')
})

// Defer path requests to a student controller
router.use('/student', require('../controllers/student.js'))

// Manage top-level request first
router.get('/student', (req, res, next) => {
  res.render('index')
})


console.log('END routing')
module.exports = router
