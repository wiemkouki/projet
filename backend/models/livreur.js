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
    id_commande:
    {
      type: DataTypes.INTEGER,
      allowNull: false, foreignKey: true,
      references: {
        model: 'commandes',
        key: 'id'
      },},
      id_doc_justificatifs:
    {
      type: DataTypes.INTEGER,
      allowNull: false, foreignKey: true,
      references: {
        model: 'doc_justificatifs',
        key: 'id'
      },
   },
   id_admin:
   {
     type: DataTypes.INTEGER,
     allowNull: false, foreignKey: true,
     references: {
       model: 'Admins',
       key: 'id'}
   },
  },
    {
    sequelize,
    modelName: 'Livreurs',
  });
  return Livreur;
};
