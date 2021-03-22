'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fiche_tech extends Model {
   
    static associate(models) {
      fiche_tech.belongsTo(models.produit, { foreignKey: 'fiche_tech', as: 'fiche_tech' });
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