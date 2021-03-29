'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorie extends Model {
   
    static associate(models) {
      categorie.hasMany(models.sous_cat, { foreignKey: 'id_sous_categorie', as: 'sous_cat' });
    }
  };
  categorie.init({
    nom_cat: DataTypes.STRING,
    id_sous_categorie:
    {
        type: DataTypes.INTEGER,
        allowNull: false, foreignKey: true,
        references: {
            model: 'sous_cats',
            key: 'id'
        },  
  }}, 
    { sequelize,
    modelName: 'categorie',
  });
  return categorie;
};