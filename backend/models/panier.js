'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class panier extends Model {
    
    static associate(models) {
      panier.belongsTo(models.client,{ foreignKey: 'id_client', as:'client'})
    }
  };
 
  panier.init({
    id: DataTypes.INTEGER,
    id_client:
    {
      type: DataTypes.INTEGER,
      references: {
        model: 'client',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },
    sequelize,
    modelName: 'panier',
  });
  return panier;
};