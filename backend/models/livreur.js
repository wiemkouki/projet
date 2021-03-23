'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livreur extends Model {

    static associate(models) {

      Livreur.hasMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
      Livreur.hasMany(models.doc_justificatifs, { foreignKey: 'id_doc_justificatifs', as: 'doc_justificatifs' });
    }
  };

  Livreur.init({
    permis: DataTypes.STRING,
    cin: DataTypes.INTEGER,
    // id_commande:
    // {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'commande',
    //     key: 'id'
    //   },
    //   onUpdate: 'restrict',
    //   onDelete: 'restrict'
    // },

    // id_doc_justificatifs:
    // {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'doc_justificatifs',
    //     key: 'id'
    //   },
    //   onUpdate: 'restrict',
    //   onDelete: 'restrict'
    // },
    sequelize,
    modelName: 'Livreur',
  });
  return Livreur;
};