'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sous_cat extends Model {
   
    static associate(models) {
      categorie.belongsTo(models.categorie, { foreignKey: 'id_sous_cat', as: 'categorie' });
    }
  };
  Sous_cat.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sous_cat',
  });
  return Sous_cat;
};