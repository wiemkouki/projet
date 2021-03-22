'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fiche_tech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Fiche_tech.init({
    id_fiche: DataTypes.INTEGER,
    caract_principale: DataTypes.STRING,
    taille: DataTypes.INTEGER,
    couleur: DataTypes.STRING,
    modele: DataTypes.STRING,
    matiere: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fiche_tech',
  });
  return Fiche_tech;
};