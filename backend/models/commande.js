'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Commande.init({
    prix: DataTypes.INTEGER,
    date: DataTypes.DATE,
    quantite: DataTypes.INTEGER,
    status: DataTypes.STRING,
    adresse_livraison: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commande',
  });
  return Commande;
};