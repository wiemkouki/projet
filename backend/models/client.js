"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      Client.hasMany(models.Commande, {
        foreignKey: "id_commande",
        as: "commande",
      });
      Client.hasOne(models.Paniers, { foreignKey: "id_panier", as: "panier" });
      Client.belongsTo(models.User, { foreignKey: "id_user", as: "user" });
      Client.hasMany(models.notePdt, {
        foreignKey: "id_notePdt",
        as: "doc_notePdt",
      });
    }
  }
  Client.init(
    {
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      tel: DataTypes.INTEGER,
      adresse: DataTypes.STRING,
      is_deleted: DataTypes.BOOLEAN,
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "User",
          key: "id",
        },
      },


    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
