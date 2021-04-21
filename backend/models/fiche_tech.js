'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fiche_tech extends Model {

    static associate(models) {
   fiche_tech.belongsTo(models.Produit,{foreignKey: 'id_produit', as:'produit'})
    }
  };

  fiche_tech.init({
    description: DataTypes.STRING,
    taille: DataTypes.INTEGER,
    couleur: DataTypes.STRING,
    modele: DataTypes.STRING,
    matiere: DataTypes.STRING,
    is_deleted:DataTypes.BOOLEAN,
    id_produit:
      {
        type: DataTypes.INTEGER,
        allowNull: false, foreignKey: true,
        references: {
          model: 'produits',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },


  }, {
    sequelize,
    modelName: 'fiche_teches',
  });
  return fiche_tech;
};
