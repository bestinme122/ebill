var Sequelize = require('sequelize'),
  Const = require('../base/enum');
module.exports = function (sequelize) {
  var Shop = sequelize.define('Shop', {
    id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {type: Sequelize.STRING(250), allowNull: false},
    owner_id: {type: Sequelize.STRING, allowNull: false},
    address: Sequelize.STRING,
    logo_url: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    status: {type: Sequelize.INTEGER, defaultValue: Const.ShopStatus.Active}
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'shops'
  });

  return {
    Shop: Shop
  };
}
