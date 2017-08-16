var Sequelize = require('sequelize'),
  Const = require('../base/enum');
module.exports = function (sequelize) {
  var Permission = sequelize.define('Permission', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING(500),
    status: {type: Sequelize.INTEGER, defaultValue: Const.RoleStatus.Active},
    permissions: Sequelize.STRING
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'roles'
  });

  return {
    Permission: Permission
  };
}
