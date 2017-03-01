var Sequelize = require('sequelize');
module.exports = function (sequelize) {
  var User = sequelize.define('User', {
    username: {type: Sequelize.STRING(250), allowNull: false, unique: true},
    password: {type: Sequelize.STRING, allowNull: false},
    first_name: {type: Sequelize.STRING(250), allowNull: false},
    last_name: {type: Sequelize.STRING(250), allowNull: false},
    address: Sequelize.STRING,
    avatar_url: Sequelize.STRING,
    phone: Sequelize.STRING,
    role: Sequelize.STRING(250),
    last_logged_in: Sequelize.DATE,
    status: {type: Sequelize.INTEGER, defaultValue: 1}
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'users'
  });

  return {
    User: User
  };
}