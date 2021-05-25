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
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tel:{
        type: Sequelize.INTEGER,
        allowNull: false
      },

      adresse: {
        type: Sequelize.STRING,
        allowNull: false
      },
        permis: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cin: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        // id_user:
        // {
        //   type: Sequelize.INTEGER,
        //   allowNull: true,
        //   references: {
        //     model: 'User',
        //     key: 'id'
        //   },

        //   onUpdate: 'restrict',
        //   onDelete: 'restrict' },

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
