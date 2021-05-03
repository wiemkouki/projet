"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Commande extends Model {
    static associate(models) {
      Commande.belongsTo(models.Livreurs, {
        foreignKey: "id_livreur",
        as: "livreur",
      });
      Commande.belongsTo(models.Client, {
        foreignKey: "id_client",
        as: "client",
      });
      Commande.hasMany(models.Produit, {
        foreignKey: "id_produit",
        as: "Produit",
      });
      Commande.hasMany(models.Admin, { foreignKey: "id_admin", as: "Admin" });
    }
  }
  Commande.init(
    {
      prix: DataTypes.INTEGER,
      date: DataTypes.DATE,
      quantite: DataTypes.INTEGER,
      status: DataTypes.STRING,
      adresse_livraison: DataTypes.STRING,
      is_deleted: DataTypes.BOOLEAN,

      id_livreur: {
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
          model: "Livreurs",
          key: "id",
        },
      },
      id_client: {
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: true,
        references: {
          model: "clients",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Commande",
    }
  );
  return Commande;
};
