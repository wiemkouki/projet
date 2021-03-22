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
    id_categorie:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categorie',
            key: 'id'
        },}

  });
  return Sous_cat;
};