'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doc_justificatifs extends Model {

    static associate(models) {
      doc_justificatifs.belongsTo(models.Livreur, { foreignKey: 'id_livreur', as: 'livreur' });
      doc_justificatifs.belongsTo(models.sup_admin, { foreignKey: 'id_sup_admin', as: 'sup_admin' });
    }
  };
  doc_justificatifs.init({
    libelle: DataTypes.STRING,
    url_doc: DataTypes.STRING,
    id_livreur:
    {
      type: DataTypes.INTEGER,
      allowNull: false, foreignKey: true,
      references: {
        model: 'Livreurs',
        key: 'id'
      },
      id_sup_admin:
      {
        type: DataTypes.INTEGER,
        allowNull: false, foreignKey: true,
        references: {
          model: 'sup_admins',
          key: 'id'
        },
      },

      sequelize,
      modelName: 'doc_justificatifs',
    }
  });
  return doc_justificatifs;
};