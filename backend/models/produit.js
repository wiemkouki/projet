'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produit extends Model {

    static associate(models) {
<<<<<<< Updated upstream
      Produit.belongsTo(models.panier,{ foreignKey: 'id_panier', as: 'panier' });
      Produit.hasOne(models.fiche_tech, { foreignKey: 'id_produit', as: 'fiche_tech' });
=======
      Produit.belongsTo(models.panier, { foreignKey: 'id_panier', as: 'panier' });
      Produit.hasOne(models.fiche_tech, { foreignKey: 'id_produit', as: 'fiche_tech' });

>>>>>>> Stashed changes
    }

  };
  produit.init({
    libelle: DataTypes.STRING,
    marque: DataTypes.STRING,
    prix: DataTypes.DECIMAL,
    image_pdt: DataTypes.STRING,
    id_commande:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Commande',
        key: 'id'
      },
      id_panier:
      {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Panier',
          key: 'id'
        },

      },
      sequelize,
      modelName: 'produit',
    }
  });
  return produit;
};