const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Listener = require('../models/listener');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth...
    Listener.findOne({ 'googleId': profile.id }, function(err, listener) {
        if (err) return cb(err);
        if (listener) {
          return cb(null, listener);
        } else {
          // we have a new student via OAuth!
          const newListener = new Listener({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
          });
          newListener.save(function(err) {
            if (err) return cb(err);
            return cb(null, newListener);
          });
        }
      });
    }
  ));

  passport.serializeUser(function(listener, done) {
    done(null, listener.id);
});

passport.deserializeUser(function(id, done) {
    Listener.findById(id, function(err, listener) {
        done(err, listener);
    });
});