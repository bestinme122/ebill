var passport = require('passport'),
  passportJWT = require('passport-jwt'),
  config = require('../../config/config'),
  extractJwt = passportJWT.ExtractJwt,
  strategyJwt = passportJWT.Strategy,
  db = require('../models'),
  userService = require('../services/user_service')(db.sequelize);

var params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: extractJwt.fromAuthHeader()
};

var jwtStrategy = new strategyJwt(params, function (payload, done) {
  userService.findByUserName(payload.id, function (error, instance) {
    if (error) {
      return next(error);
    }
    if (instance) {
      return done(null, {id: payload.id});
    }else {
      return done(new Error("Not access"));
    }
  });
});

passport.use('jwt', jwtStrategy);

module.exports.isJwtAuthenticated = passport.authenticate('jwt', {session: false});
