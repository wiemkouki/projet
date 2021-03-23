'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sup_admin extends Model {
   
    static associate(models) {
      Sup_admin.hasMany(models.doc_justificatifs, { foreignKey: 'id_doc_justificatifs', as: 'doc_justificatifs' });
    }
  };
  
  Sup_admin.init({
    id: DataTypes.INTEGER,
    id_doc_justificatifs:{
      type: DataTypes.INTEGER,
      references: {
        model: 'doc_justificatifs',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },
    sequelize,
    modelName: 'Sup_admin',
  });
  return Sup_admin;
};