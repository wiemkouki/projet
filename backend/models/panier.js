'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Panier extends Model {

    static associate(models) {
      // Panier.belongsTo(models.Client, { foreignKey: 'id_client', as: 'client' });
      // Panier.hasMany(models.Produit, { foreignKey: 'id_produit', as: 'produit' });

    }
  };
  Panier.init({

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,

    },
    id_client:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clients',
        key: 'id_client'
      },},


    is_deleted:DataTypes.BOOLEAN,
  },

    {
      sequelize,
      modelName: 'Paniers',
    });
  return Panier;
};
