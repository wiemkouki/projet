'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
<<<<<<< HEAD
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
        model: 'Commandes',
        key: 'id'
      },
      id_panier:
      {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Paniers',
          key: 'id'
        },

      },
      sequelize,
      modelName: 'produit',
    }
=======
  Produit.init({
    nom_p: DataTypes.STRING,
    prix: DataTypes.INTEGER,
    max_rating: DataTypes.INTEGER,
    disponible: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produit',
>>>>>>> fad83aabd2e226428c43716b3ddae6275bc2b0be
  });
  return Produit;
};