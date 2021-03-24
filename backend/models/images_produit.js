'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class images_produit extends Model {
   
    static associate(models) {
      images_produit.belongsTo(models.produit, { foreignKey: 'id_produit', as: 'produit' });
    }
  };
  images_produit.init({
    url: DataTypes.STRING,
    id_produit:
    {
      type: DataTypes.INTEGER,
      references: {
        model: 'produits',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },


  }, {
    sequelize,
    modelName: 'images_produit',
  });
  return images_produit;
};