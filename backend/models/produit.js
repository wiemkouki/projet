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

    }
  };
  Produit.init({
    nom_p: DataTypes.STRING,
    marque: DataTypes.STRING,
    prix: DataTypes.INTEGER,
    max_rating: DataTypes.INTEGER,
    disponible: DataTypes.STRING,
    is_deleted :DataTypes.BOOLEAN,


    id_commande:
    {
      type: DataTypes.INTEGER,
      allowNull: false, foreignKey: true,
      references: {
        model: 'commandes',
        key: 'id'
      },
      id_notePdt:
      {
        type: DataTypes.INTEGER,
        allowNull: false, foreignKey: true,
        references: {
          model: 'notePdts',
          key: 'id'
        },
      },
      id_panier:
      {
        type: DataTypes.INTEGER,
        allowNull: false, foreignKey: true,
        references: {
          model: 'paniers',
          key: 'id'
        },
      },
      id_stock:
      {
        type: DataTypes.INTEGER,
        allowNull: false, foreignKey: true,
        references: {
          model: 'stocks',
          key: 'id'
        },
      }
    }
  },
    {
      sequelize,
      modelName: 'Produit',
    });
  return Produit;
};
