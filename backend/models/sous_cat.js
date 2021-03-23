'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sous_cat extends Model {
   
    static associate(models) {
      Sous_cat.belongsTo(models.categorie, { foreignKey: 'id_categorie', as: 'categorie' });
    }
  };
  Sous_cat.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sous_cat',
  id_categorie:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        },}

  });
  return Sous_cat;
};