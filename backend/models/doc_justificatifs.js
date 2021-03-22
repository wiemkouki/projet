'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doc_justificatifs extends Model {
  
    static associate(models) {
      doc_justificatifs.belongsTo(models.Livreur, { foreignKey: 'id_livreur', as: 'livreur' });
    }
  };
  doc_justificatifs.init({
    libelle: DataTypes.STRING,
    url_doc: DataTypes.STRING,
    id_livreur:
                {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Livreur',
                        key: 'id'
                    },
  },
  
    sequelize,
    modelName: 'doc_justificatifs',
  });
  return doc_justificatifs;
};