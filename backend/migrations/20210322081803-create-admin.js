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

      nom_boutique: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.INTEGER
      },

      adresse: {
        type: Sequelize.STRING
      },
    
      is_deleted:{
        type: Sequelize.BOOLEAN
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

   });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Admins');
  }
};
