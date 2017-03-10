var validator = require('validator'),
  express = require('express'),
  router = express.Router(),
  db = require('../models'),
  jwt = require('jwt-simple'),
  shop_service = require('../services/shop_service')(db.sequelize),
  auth = require('../auth');
  config = require('../../config/config');


module.exports = function (app) {
  app.use('/shop', router);
};

router.post('/', auth.isJwtAuthenticated, function (req, res, next) {
  var shop = {
    name: req.body.name,
    ownerId: req.body.ownerId,
    avatar_url: req.body.avatar_url || null,
    address: req.body.address || null,
    phone_number: req.body.phone_number || null
  };

  shop_service.addShop(shop, function (error, createdUser) {
    if (error) {
      return next(error);
    }

    return res.json({message: "Successful", data: createdUser});
  })
});

router.get('/:id/', auth.isJwtAuthenticated, function (req, res, next) {
  shop_service.findByOwnerId(req.params.id, function (error, shops) {
    if (error) {
      return next(error);
    }

    return res.json(shops || []);
  })
});
