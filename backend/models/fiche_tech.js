'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fiche_tech extends Model {
   
    static associate(models) {
      fiche_tech.belongsTo(models.produit, { foreignKey: 'id_produit', as: 'produit' });
    }
  };
  fiche_tech.init({
    caracteristiques: DataTypes.STRING,
    id_produit:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produit',
        key: 'id'
      },
  },




   
    sequelize,
    modelName: 'fiche_tech',
  });
  return fiche_tech;
};