var _ = require('underscore');
module.exports = function (sequelize) {
  var User = require('../models/schemas')(sequelize).User;

  return {
    addNewUser: function (user, cb) {
      User.create(user)
        .then(function (instance) {
          return cb(null, _.clone(instance.dataValues));
        })
        .catch(function (error) {
          return cb(error);
        });
    },
    login: function (user, password, cb) {
      var isSuccessful = true;

      User.findOne({
        where: {username: user}
      })
        .then(function (instance) {
          if (!instance) {
            return cb(null, false);
          }
          var user = _.clone(instance.dataValues);
          if (user.password !== password) {
            return cb(null, false);
          }

          instance.last_logged_in = sequelize.fn('NOW');
          return instance.save({silent: true});
        })
        .then(function () {
          return cb(null, isSuccessful);
        })
        .catch(function (error) {
          return cb(error);
        });
    },
    changePassword: function (username, oldPassword, newPassword, cb) {
      var service = this;
      service.login(username, oldPassword, function (error, isSuccessful) {
        if (error) {
          return cb(error);
        }
        if (!isSuccessful) {
          return cb(new Error('Cannot change password'));
        }
        User
          .update({password: newPassword}, {where: {username: username}})
          .then(function () {
            return cb(null, true);
          })
          .catch(function (error) {
            return cb(error);
          });
      });
    },
    removeUserById: function (id, cb) {
      User
        .destroy({where: {id: id}})
        .then(function (number) {
          return number ? cb(null, true) : cb(null, false);
        })
        .catch(function (error) {
          return cb(error);
        });
    },
    findByUserName: function (username, cb) {
      console.log('Access find by username');
      User.findOne({
        where: {username: username}
      })
        .then(function (user) {
          return cb(null, user);
        })
        .catch(function (error) {
          return cb(error);
        });
    },
    findAll: function (cb) {
      User.findAll({
      })
        .then(function (users) {
          return cb(null, users);
        })
        .catch(function (error) {
          return cb(error);
        });
    }
  }
};
