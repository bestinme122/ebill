var express = require('express'),
  router = express.Router(),
  jwt = require('jwt-simple'),
  config = require('../../config/config'),
  db = require('../models'),
  userService = require('../services/user_service')(db.sequelize);

module.exports = function (app) {
    app.use('/auth', router);
};

router.post('/token', function (req, res, next) {
  var username = req.body.username || null,
    password = req.body.password || null;

  console.log(username + ' : ' + password + 'Reqest : ' + JSON.stringify(req.body));
  userService.findByUserName(username, function (error, instance) {
    if (error) {
      return next(error);
    }
    if (!instance) {
      var error = new Error('UserName not found.');
      error.status = 401;
      return next(error);

    }else if (username !== instance.username || password !== instance.password) {
        var error = new Error('Unauthorized');
        error.status = 401;
        return next(error);
    }

    var payload = {id: username};
    console.log('config.jwtSecret: ' + config.jwtSecret);
    var token = jwt.encode(payload, config.jwtSecret);
    res.json({token: token});

  });


});
