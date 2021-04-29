'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorie extends Model {

    static associate(models) {
      categorie.hasMany(models.Sous_cat, { foreignKey: 'id_sous_categorie', as: 'sous_cat' });
      categorie.belongsTo(models.Sup_admin, { foreignKey: 'id_sup_admin', as: 'sup_admin' });
    }
  };
  categorie.init({
    nom_cat: DataTypes.STRING,
    famille: DataTypes.STRING,
    is_deleted:DataTypes.BOOLEAN,
    },
    { sequelize,
    modelName: 'categorie',
  });
  return categorie;
};
