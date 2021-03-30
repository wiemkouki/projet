'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
  
    static associate(models) {
      Client.hasMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
      Client.hasOne(models.Paniers, { foreignKey: 'id_panier', as: 'panier' });
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
        allowNull: false, foreignKey: true,
        references: {
            model: 'Commandes',
            key: 'id'
        },},  
    id_panier:
    {
        type: DataTypes.INTEGER,
        allowNull: false, foreignKey: true,
        references: {
            model: 'Paniers',
            key: 'id'
        },
       
     }
  }, 
  {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};