'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class panier extends Model {
    
    static associate(models) {
      
    }
  };
  panier.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'panier',
  });
  return panier;
};