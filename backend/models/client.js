'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Client.hasMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
      Client.belongsTo(models.Panier, { foreignKey: 'id_panier', as: 'panier' });
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
        allowNull: false,
        references: {
            model: 'Commande',
            key: 'id'
        },  
    id_panier:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Panier',
            key: 'id'
        },
       
  }, 
    sequelize,
    modelName: 'Client',
  }});
  return Client;
};