'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fiche_tech extends Model {
   
    static associate(models) {
      fiche_tech .belongsTo(models.panier,{ foreignKey: 'id_panier', as: 'panier' });
    }
  };
  fiche_tech.init({
    caract_principale: DataTypes.STRING,
    taille: DataTypes.INTEGER,
    couleur: DataTypes.STRING,
    modele: DataTypes.STRING,
    matiere: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fiche_tech',
  });
  return fiche_tech;
};