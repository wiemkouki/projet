'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {

    static associate(models) {
      Admin.hasMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
      Admin.hasMany(models.stock, { foreignKey: 'id_stock', as: 'stock' });
      Admin.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });


    }

  };

    Admin.init({
      nom_boutique: DataTypes.STRING,
      tel: DataTypes.INTEGER,

      adresse: DataTypes.STRING,
      logo: DataTypes.STRING,
      is_deleted:DataTypes.BOOLEAN,
      id_user:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        },},

        },
        {
          sequelize: sequelize,
          modelName: 'Admin',
        }

    );
    return Admin;
};
