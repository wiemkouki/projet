'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {
    
    static associate(models) {
   Produit.hasMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
  
    }
  };
  Produit.init({
    nom_p: DataTypes.STRING,
    prix: DataTypes.INTEGER,
    max_rating: DataTypes.INTEGER,
    disponible: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produit',
  });
  return Produit;
};