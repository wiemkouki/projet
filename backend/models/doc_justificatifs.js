'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doc_justificatifs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  doc_justificatifs.init({
    libelle: DataTypes.STRING,
    url_doc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'doc_justificatifs',
  });
  return doc_justificatifs;
};