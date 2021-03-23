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
    sequelize,
    modelName: 'stock',
  });
  return stock;
};