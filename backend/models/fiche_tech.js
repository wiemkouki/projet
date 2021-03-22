'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fiche_tech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  fiche_tech.init({
    caracteristiques: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fiche_tech',
  });
  return fiche_tech;
};