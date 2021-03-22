'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produit extends Model {
    
    static associate(models) {
      Produit.belongsTo(models.panier,{ foreignKey: 'id_panier', as: 'panier' });
      Produit.hasOne(models.fiche_tech, { foreignKey: 'id_produit', as: 'fiche_tech' });
    }
    
  };
  produit.init({
    libelle: DataTypes.STRING,
    marque: DataTypes.STRING,
    prix: DataTypes.DECIMAL,
    image_pdt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'produit',
  });
  return produit;
};