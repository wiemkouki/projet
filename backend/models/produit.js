'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {

    static associate(models) {
      Produit.hasMany(models.notePdt, { foreignKey: 'id_notePdt', as: 'doc_notePdt' });
      Produit.hasMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
      Produit.hasMany(models.images_produit, { foreignKey: 'id_images_produit', as: 'images_produit' });
      Produit.hasMany(models.Paniers, { foreignKey: 'id_panier', as: 'panier' });
      Produit.hasOne(models.fiche_teches, { foreignKey: 'id_fiche_tech', as: 'fiche_teches' });

    }
  };
  Produit.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    libelle: DataTypes.STRING,
    marque: DataTypes.STRING,
    prix: DataTypes.INTEGER,
    max_rating: DataTypes.INTEGER,
    disponible: DataTypes.STRING,
    image: DataTypes.STRING,
    is_deleted :DataTypes.BOOLEAN,

  },
    {
      sequelize,
      modelName: 'Produit',
    });
  return Produit;
};
