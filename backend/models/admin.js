'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {

    static associate(models) {
      Admin.belongsToMany(models.commande, { foreignKey: 'id_commande', as: 'commande' });
      Admin.hasMany(models.stock, { foreignKey: 'id_stock', as: 'stock' });

    }
  };

  Admin.init({
    nom_boutique: DataTypes.STRING,
    tel: DataTypes.INTEGER,
    email: DataTypes.STRING,
    adresse: DataTypes.STRING,
    logo: DataTypes.STRING,
    id_commande:
    {
      type: DataTypes.INTEGER,
      references: {
        model: 'commandes',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },
      id_stock:
      {
        type: DataTypes.INTEGER,
        references: {
          model: 'stocks',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      
      sequelize,
      modelName: 'Admin',
    
  });
  return Admin;
};