'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sous_cat extends Model {

    static associate(models) {
      Sous_cat.belongsTo(models.categorie, { foreignKey: 'id_categorie', as: 'categorie' });
    }
  };
  Sous_cat.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nom_ss_cat: DataTypes.STRING,
    id_categorie:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        },},



        is_deleted :DataTypes.BOOLEAN,


      },

      {
          sequelize,
          modelName: 'Sous_cat',},

   );
  return Sous_cat;
};
