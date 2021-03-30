'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {

    static associate(models) {
      //Admin.belongsToMany(models.Commande, { foreignKey: 'id_commande', as: 'commande' });
      Admin.hasMany(models.stock, { foreignKey: 'id_stock', as: 'stock' });
      // User.belongsToMany(Project, { through: UserProject });

    }
  
  };
 
    Admin.init({
      nom_boutique: DataTypes.STRING,
      tel: DataTypes.INTEGER,
      email: DataTypes.STRING,
      adresse: DataTypes.STRING,
      logo: DataTypes.STRING,
      id_commande:
      {
        type: DataTypes.INTEGER,
        allowNull: false, foreignKey: true,
        references: {
          model: 'Commande',
          key: 'id'
        },
      },
        id_stock:
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          foreignKey: true,
          references: {
            model: 'Stocks',
            key: 'id'
          },
        }},
        {
          sequelize: sequelize,
          modelName: 'Admin',
        }

    );
    return Admin;
};