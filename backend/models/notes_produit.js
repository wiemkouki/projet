'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notes_produit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  notes_produit.init({
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'notes_produit',
  });
  return notes_produit;
};