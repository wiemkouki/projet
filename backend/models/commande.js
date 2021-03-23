'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commande extends Model {

    static associate(models) {
      Commande.belongsTo(models.Livreur, { foreignKey: 'id_livreur', as: 'livreur' });
      Commande.belongsTo(models.Client, { foreignKey: 'id_client', as: 'client' });
      Commande.belongsToMany(models.Admin, { foreignKey: 'id_admin', as: 'admin' });
    }
  };
  
  Commande.init({
    prix: DataTypes.INTEGER,
    date: DataTypes.DATE,
    quantite: DataTypes.INTEGER,
    status: DataTypes.STRING,
    adresse_livraison: DataTypes.STRING,
    id_livreur:
    {
      type: DataTypes.INTEGER,
      references: {
        model: 'livreur',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },

      id_admin:
      {
        type: DataTypes.INTEGER,
        references: {
          model: 'admin',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
        id_client:
        {
          type: DataTypes.INTEGER,
          references: {
            model: 'client',
            key: 'id'
          },
          onUpdate: 'restrict',
          onDelete: 'restrict'
        },
        sequelize,
        modelName: 'Commande',
  
  });
  return Commande;
};