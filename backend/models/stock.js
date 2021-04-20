'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stock extends Model {

    static associate(models) {
      stock.belongsTo(models.Admin, { foreignKey: 'id_admin', as: 'admin' });
    }
  };
  stock.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      },
    description: DataTypes.STRING,
    id_admin:
    {
      type: DataTypes.INTEGER,

      references: {
        model: 'admins',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },
    id_produit:
    {
      type: DataTypes.INTEGER,
      allowNull: false, foreignKey: true,
      references: {
        model: 'produits',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },
  },
    {
    sequelize,
    modelName: 'stock',
  });
  return stock;
};
