'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produit.belongsTo(models., { foreignKey: 'id_livreur', as: 'livreur' });
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