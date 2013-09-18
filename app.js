"use strict"

var express = require('express')
var app = express()
app.use(express.logger())

// Set up routes
require('./routes')(app)

var port = process.env.PORT || 5000
app.listen(port, function() {
  console.log('Listening on ' + port)
})