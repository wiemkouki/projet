var DataTypes = require('sequelize/lib/data-types');
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Livreurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    
        permis: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cin: {
          type: Sequelize.INTEGER, 
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }
);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Livreurs');
  }
};