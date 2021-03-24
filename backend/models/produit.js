'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {

    static associate(models) {
<<<<<<< HEAD
      Produit.hasMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
      Produit.hasMany(models.notePdt, { foreignKey: 'id_notePdt', as: 'doc_notePdt' });

=======
   Produit.hasMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
   Produit.hasMany(models.images_produit, { foreignKey: 'id_images_produit', as: 'images_produit' });
   Produit.hasMany(models.notes_produit, { foreignKey: 'id_notes_produit', as: 'notes_produit' });
>>>>>>> b2fcd5658d185eb9339418a925fe84eef5a80257
    }
  };
  Produit.init({
    nom_p: DataTypes.STRING,
    prix: DataTypes.INTEGER,
    max_rating: DataTypes.INTEGER,
    disponible: DataTypes.STRING,
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
      }
    }
  },
    {
      sequelize,
      modelName: 'Produit',
    });
  return Produit;
};