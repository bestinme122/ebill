var Sequelize = require('sequelize'),
  Const = require('../base/enum');
module.exports = function (sequelize) {
  var Order = sequelize.define('Order', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    shop_id: Sequelize.INTEGER,
    subtotal: Sequelize.DECIMAL,
    grand_total: Sequelize.DECIMAL,
    vat_numnber: Sequelize.STRING(250),
    vat_amount: Sequelize.DECIMAL,
    discount_amount: Sequelize.DECIMAL,
    description: Sequelize.STRING,
    customer_id: Sequelize.INTEGER,
    status: {type: Sequelize.INTEGER, defaultValue: Const.OrderStatus.Created},
    created_user_id: {type: Sequelize.STRING(250), allowNull: false}
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'orders'
  });

  return {
    Order: Order
  };
}
