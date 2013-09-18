var passport = require('passport')
  , GoogleStrategy = require('passport-google').Strategy

if (process.env.MODE == 'dev') {
  passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:5000/auth/google/return',
    realm: 'http://localhost:5000/'
  },
  function(identifier, profile, done) {
    // User.findOrCreate({
    //   openId: identifier
    // }, function(err, user) {
    //   done(err, user)
    // })
    console.log(identifier)
    console.log(profile)
  }))
} else {
  passport.use(new GoogleStrategy({
    returnURL: 'http://pacific-fortress-8045.herokuapp.com/auth/google/return',
    realm: 'http://pacific-fortress-8045.herokuapp.com'
  },
  function(identifier, profile, done) {
    // User.findOrCreate({
    //   openId: identifier
    // }, function(err, user) {
    //   done(err, user)
    // })
    console.log(identifier)
    console.log(profile)
  }))
}