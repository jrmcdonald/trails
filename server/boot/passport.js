const Extract = require('passport-jwt').ExtractJwt;
const Strategy = require('passport-jwt').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

// Setup work and export for the JWT passport strategy
module.exports = (passport) => {
  const opts = {};

  opts.jwtFromRequest = Extract.fromAuthHeader();
  opts.secretOrKey = process.env.APP_AUTH_SECRET;

  passport.use(new Strategy(opts, (payload, done) => {
    const result = User.findById(payload.id).exec();

    result.then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    }).catch(err => done(err, false));
  }));
};
