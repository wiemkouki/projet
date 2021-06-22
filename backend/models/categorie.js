'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorie extends Model {

    static associate(models) {
      categorie.hasMany(models.Produit, { foreignKey: 'id_produit', as: 'produit' });
      // categorie.belongsTo(models.Sup_admin, { foreignKey: 'id_sup_admin', as: 'sup_admin' });
    }
  };
  categorie.init({
    id:  {primaryKey : true,
         type: DataTypes.INTEGER,
          allowNull: true,
    },
    nom_cat: DataTypes.STRING,
    famille: DataTypes.STRING,
    is_deleted:DataTypes.BOOLEAN,



    },
    { sequelize,
    modelName: 'categorie',
  });
  return categorie;
};
