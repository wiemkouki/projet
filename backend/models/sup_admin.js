"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sup_admin extends Model {
    static associate(models) {
      Sup_admin.hasMany(models.categorie, {
        foreignKey: "id_categorie",
        as: "categorie",
      });
      Sup_admin.hasOne(models.doc_justificatifs, {
        foreignKey: "id_doc_justificatifs",
        as: "doc_justificatifs",
      });
      Sup_admin.belongsTo(models.User, { foreignKey: "id_user", as: "user" });
    }
  }

  Sup_admin.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Sup_admin",
    }
  );
  return Sup_admin;
};
