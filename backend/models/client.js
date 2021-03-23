'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
  
    static associate(models) {
      Client.hasMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
      Client.hasOne(models.Panier, { foreignKey: 'id_panier', as: 'panier' });
    }
  };
  
  Client.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    tel: DataTypes.INTEGER,
    email: DataTypes.STRING,
    adresse: DataTypes.STRING,
    id_commande:
    {
        type: DataTypes.INTEGER,
        references: {
          model: 'commande',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
    id_panier:
    {
        type: DataTypes.INTEGER,
        references: {
          model: 'panier',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
    sequelize,
    modelName: 'Client',
  });
  return Client;
};