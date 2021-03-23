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
  db.sync({ force: true });
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
      id_sup_admin:
      {
        type: DataTypes.INTEGER,
        references: {
          model: 'sup_admin',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      id_livreur:
      {
        type: DataTypes.INTEGER,
        references: {
          model: 'livreur',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      sequelize,
      modelName: 'doc_justificatifs',
    }
  });
  return doc_justificatifs;
};