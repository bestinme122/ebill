var Sequelize = require('sequelize'),
  Const = require('../base/enum');
module.exports = function (sequelize) {
  var Article = sequelize.define('Article', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {type: Sequelize.STRING(250), allowNull: false},
    icon: {type: Sequelize.STRING},
    price: Sequelize.DECIMAL,
    status: {type: Sequelize.INTEGER, defaultValue: Const.ArticleStatus.Active},
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'articles'
  });

  return {
    Article: Article
  };
}
