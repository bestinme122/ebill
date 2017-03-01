var validator = require('validator'),
  express = require('express'),
  router = express.Router(),
  db = require('../models'),
  userService = require('../services/user_service')(db.sequelize);

module.exports = function (app) {
  app.use('/user', router);
};

router.post('/', function (req, res, next) {
  var user = {
    username: req.body.username,
    password: req.body.password,
    first_name: req.body.first_name || null,
    last_name: req.body.last_name || null,
    address: req.body.address || null,
    phone_number: req.body.phone_number || null
  };

  if (!user.username || !validator.isEmail(user.username)) {
    var error = new Error('Email is required or is invalid email format');
    error.status = 400;
    return next(error);
  }

  if (!user.password) {
    var error = new Error('Password is required');
    error.status = 400;
    return next(error);
  }

  userService.addNewUser(user, function (error, createdUser) {
    if (error) {
      return next(error);
    }

    return res.json({message: "Successful", data: createdUser});
  })

});

router.post('/login', function (req, res, next) {
  
  var username = req.body.username,
    password = req.body.password;

  if (!username || !validator.isEmail(username)) {
    var error = new Error('Email is required or is invalid email format');
    error.status = 400;
    return next(error);
  }

  if (!password) {
    var error = new Error('Password is required');
    error.status = 400;
    return next(error);
  }
  
  userService.login(username, password, function (error, isSuccess) {
    if (error) {
      return next(error);
    }
    return res.json({message: isSuccess ? "Successful" : "Fail"});
  });

});

router.put('/change-password', function (req, res, next) {

  var username = req.body.username,
    oldPassword = req.body.old_password,
    newPassword = req.body.new_password;

  if (!username || !validator.isEmail(username)) {
    var error = new Error('Email is required or is invalid email format');
    error.status = 400;
    return next(error);
  }

  if (!oldPassword || !newPassword) {
    var error = new Error('Password is required');
    error.status = 400;
    return next(error);
  }

  userService.changePassword(username, oldPassword, newPassword, function(error, isSuccess){
    if (error) {
      return next(error);
    }
    return res.json({message: isSuccess ? "Successful" : "Fail"});
  });

});

router.delete('/:id(\\d+)/', function (req, res, next) {
  userService.removeUserById(req.params.id, function (error, isDeleted) {
    if (error) {  
      return next(error);
    }

    return res.json({message: "Successful", isDeleted: isDeleted});
  });
});