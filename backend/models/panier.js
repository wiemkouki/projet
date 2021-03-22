'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class panier extends Model {
   
    static associate(models) {
      panier.belongsTo(models.Client, { foreignKey: 'id_client', as: 'client' });
   
    }
  };
  panier.init({
    id_panier: DataTypes.STRING,

  id_client:
                {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Client',
                        key: 'id'
                    },
  }}, {
    sequelize,
    modelName: 'panier',
  });
  return panier;
};