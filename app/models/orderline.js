var Sequelize = require('sequelize'),
  Const = require('../base/enum');
module.exports = function (sequelize) {
  var OrderLine = sequelize.define('OrderLine', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    order_id: Sequelize.UUID,
    article_id: Sequelize.INTEGER,
    price: Sequelize.DECIMAL,
    display: Sequelize.STRING,
    qty: Sequelize.INTEGER,
    status: {type: Sequelize.INTEGER, defaultValue: Const.OrderLineStatus.Active},
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'orderlines'
  });

  return {
    OrderLine: OrderLine
  };
}
