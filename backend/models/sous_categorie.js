'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sous_Categorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sous_Categorie.init({
    code_ss_cat: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sous_Categorie',
  });
  return sous_Categorie;
};