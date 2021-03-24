'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {
    
    static associate(models) {
   Produit.hasMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
   Produit.hasMany(models.images_produit, { foreignKey: 'id_images_produit', as: 'images_produit' });
   Produit.hasMany(models.notes_produit, { foreignKey: 'id_notes_produit', as: 'notes_produit' });
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