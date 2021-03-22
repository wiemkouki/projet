'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livreur extends Model {
    
   static associate(models){
    
      Livreur.hasMany(models.Commande, { foreignKey: 'id_livreur', as: 'commande' });
      Livreur.hasMany(models.doc_justificatifs, { foreignKey: 'id_livreur', as: 'doc_justificatifs' });
   }
  };


  Livreur.init({
    permis: DataTypes.STRING,
    cin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livreur',
  });
  return Livreur;
};