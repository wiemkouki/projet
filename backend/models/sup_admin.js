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
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sup_admin',
  });
  return Sup_admin;
};