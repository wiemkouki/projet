'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class image_produit extends Model {
    
  
    static associate(models) {
    
    }
  };
  db.sync({ force: true });
  image_produit.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'image_produit',
  });
  return image_produit;
};