"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class doc_justificatifs extends Model {
    static associate(models) {
      doc_justificatifs.hasMany(models.Livreurs, {
        foreignKey: "id_livreur",
        as: "livreur",
      });
      doc_justificatifs.hasMany(models.Sup_admin, {
        foreignKey: "id_sup_admin",
        as: "sup_admin",
      });
      doc_justificatifs.hasMany(models.Admin, {
        foreignKey: "id_admin",
        as: "admin",
      });
    }
  }

  doc_justificatifs.init(
    {
      libelle: DataTypes.STRING,
      url_doc: DataTypes.STRING,
      is_valide: DataTypes.BOOLEAN,


      id_livreur: {
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
          model: " Livreur",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "doc_justificatifs",
    }
  );
  return doc_justificatifs;
};
