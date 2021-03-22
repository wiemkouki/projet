'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorie extends Model {
   
    static associate(models) {
      categorie.hasMany(models.sous_cat, { foreignKey: 'id_categorie', as: 'sous_cat' });
    }
  };
  categorie.init({
    nom_cat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categorie',
  });
  return categorie;
};