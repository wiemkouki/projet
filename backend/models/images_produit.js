'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class images_produit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  images_produit.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'images_produit',
  });
  return images_produit;
};