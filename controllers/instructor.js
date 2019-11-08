const express = require('express')
const api = express.Router()
// const Model = require('../models/developer.js')
const find = require('lodash.find')
const notfoundstring = 'Could not find developer with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const data = req.app.locals.instructors.query
    res.send(JSON.stringify(data))
  })
  
  // GET one JSON by ID
api.get('/findone/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const id = parseInt(req.params.id)
    const data = req.app.locals.instructors.query
    const item = find(data, { _id: id })
    if (!item) { return res.end(notfoundstring + id) }
    res.send(JSON.stringify(item))
  })
  

  module.exports = api