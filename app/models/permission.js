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
    default: {type: Sequelize.BOOLEAN, defaultValue: false},
    status: {type: Sequelize.INTEGER, defaultValue: Const.PermisionStatus.Active},
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'permissions'
  });

  return {
    Permission: Permission
  };
}
