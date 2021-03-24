'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notePdt extends Model {

    static associate(models) {

      notePdt.belongsTo(models.produit, { foreignKey: 'id_produit', as: 'produit' });
      
    }
  };


  notePdt.init({
    permis: DataTypes.STRING,
    cin: DataTypes.INTEGER,
    id_produit:
    {
      type: DataTypes.INTEGER,
      allowNull: false, foreignKey: true,
      references: {
        model: 'produits',
        key: 'id'
      },
    //   id_doc_justificatifs:
    // {
    //   type: DataTypes.INTEGER,
    //   allowNull: false, foreignKey: true,
    //   references: {
    //     model: 'doc_justificatifs',
    //     key: 'id'
    //   },
    }, 
    sequelize,
    modelName: 'notePdt',
  });
  return notePdt;
};