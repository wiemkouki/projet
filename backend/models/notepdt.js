'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notePdt extends Model {

    static associate(models) {

      notePdt.belongsTo(models.Produit, { foreignKey: 'id_produit', as: 'produit' });
      notePdt.hasMany(models.Client, { foreignKey: 'id_client', as: 'client' });
    }
  };


  notePdt.init({
    permis: DataTypes.STRING,
    cin: DataTypes.INTEGER,
    id_client:
      {
        type: DataTypes.INTEGER,
        allowNull: false, foreignKey: true,
        references: {
          model: 'Client',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
    id_produit:
    {
      type: DataTypes.INTEGER,
      allowNull: false, foreignKey: true,
      references: {
        model: 'produits',
        key: 'id'
      },
  }},

      {
      sequelize,
      modelName: 'notePdt',
    });

  return notePdt;
};
