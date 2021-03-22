'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livreur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Livreur.init({
    permis: DataTypes.STRING,
    cin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livreur',
  });
  return Livreur;
};