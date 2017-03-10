var Sequelize = require('sequelize'),
  Const = require('../base/enum');
module.exports = function (sequelize) {
  var Shop = sequelize.define('Shop', {
    name: {type: Sequelize.STRING(250), allowNull: false},
    ownerId: {type: Sequelize.STRING, allowNull: false},
    address: Sequelize.STRING,
    avatar_url: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    status: {type: Sequelize.INTEGER, defaultValue: Const.ShopStatus.Active}
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'Shops'
  });

  return {
    Shop: Shop
  };
}
