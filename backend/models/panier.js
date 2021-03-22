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
    id: DataTypes.INTEGER,
    id_client:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
        key: 'id'
      },


  }, 
    sequelize,
    modelName: 'panier',
  });
  return panier;
};