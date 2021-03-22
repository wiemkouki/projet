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
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'stock',
  });
  return stock;
};