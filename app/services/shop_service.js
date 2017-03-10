/**
 * Created by TRONGNV on 3/10/2017.
 */
var _ = require('underscore'),
  db = require('../models'),
  Const = require('../base/enum'),
  userService = require('../services/user_service')(db.sequelize);

module.exports = function (sequelize) {
  var Shop = require('../models/shop')(sequelize).Shop;

  return {
    addShop: function (shop, cb) {
      userService.checkExist(shop.ownerId, function (error, isFound) {
        if(error){
          cb(error);
        } else if(!isFound) {
          cb (new Error('User Id is not found, Add shop failed'));
        }else{
          Shop.create(shop)
            .then(function (instance) {
              return cb(null, _.clone(instance.dataValues));
            })
            .catch(function (error) {
              return cb(error);
            });
        }
      });

    },
    findByOwnerId: function (ownerId, cb) {
      Shop.findAll({
        where: {
          ownerId: ownerId,
          status: Const.ShopStatus.Active
        }
      })
        .then(function (shops) {
          return cb(null, shops);
        })
        .catch(function (error) {
          return cb(error);
        });
    }
  }
};
