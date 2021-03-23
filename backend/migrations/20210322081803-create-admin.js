'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD
      // id_commande:
      // {
      //   type: Sequelize.INTEGER,
      //   allowNull: false, foreignKey: true,
      //   references: {
      //     model: 'commandes',
      //     key: 'id',},
      //     onUpdate: 'restrict',
      //     onDelete: 'restrict'
      //   },
      //   id_stock:
      //   {type: Sequelize.INTEGER,
      //     allowNull: false,
      //     foreignKey: true,
      //     references: {
      //       model: 'Stock',
      //       key: 'id'
      //     },
=======
      id_commande:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true
        },
      id_stock: { 
        type: Sequelize.INTEGER 
      },
>>>>>>> fad83aabd2e226428c43716b3ddae6275bc2b0be

      nom_boutique: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
<<<<<<< HEAD
    //  
=======
>>>>>>> fad83aabd2e226428c43716b3ddae6275bc2b0be
   });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Admins');
  }
};