'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class images_produit extends Model {

    static associate(models) {
      // images_produit.belongsTo(models.Produit, { foreignKey: 'id_produit', as: 'produit' });
    }
  };
  images_produit.init({
    url: DataTypes.STRING,
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
    modelName: 'images_produit',
  });
  return images_produit;
};
