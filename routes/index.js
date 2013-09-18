"use strict"

var passport = require('passport')
  , auth = require('../lib/auth')

module.exports = function(app) {
  app.get('/', function(request, response) {
    response.send('Hello World!')
  })

  app.get('/auth/google', passport.authenticate('google'))

  app.get('/auth/google/return',
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    }))
}