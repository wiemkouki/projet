'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fiche_tech extends Model {
  
    static associate(models) {
   fiche_tech.belongsTo(models.produit,{foreignKey: 'id_produit', as:'produit'})
    }
  };
  fiche_tech.init({
    caract_principale: DataTypes.STRING,
    taille: DataTypes.INTEGER,
    couleur: DataTypes.STRING,
    modele: DataTypes.STRING,
    matiere: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'fiche_teches',
  });
  return fiche_tech;
};