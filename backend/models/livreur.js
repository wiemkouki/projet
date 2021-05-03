"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Livreur extends Model {
    static associate(models) {
      Livreur.hasMany(models.Commande, {
        foreignKey: "id_commande",
        as: "commande",
      });
      Livreur.hasMany(models.doc_justificatifs, {
        foreignKey: "id_doc_justificatifs",
        as: "doc_justificatifs",
      });
      Livreur.belongsTo(models.User, { foreignKey: "id_user", as: "user" });
    }
  }

  Livreur.init(
    {
      nom: DataTypes.STRING,
      tel: DataTypes.INTEGER,
      adresse: DataTypes.STRING,
      permis: DataTypes.STRING,
      cin: DataTypes.INTEGER,
      is_deleted: DataTypes.BOOLEAN,
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
      modelName: "Livreurs",
    }
  );
  return Livreur;
};
