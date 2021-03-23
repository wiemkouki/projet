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
      // id_commande:
      // {
      //   type: Sequelize.INTEGER,
      //   allowNull: false, 
      //   references: {
      //     model: 'commandes',
      //     key: 'id'
      //   },
      //   onUpdate: 'restrict',
      //   onDelete: 'restrict'
      // },
        // id_doc_justificatifs:
        // {
        //   type: Sequelize.INTEGER,
        //   allowNull: false, 
        //   references: {
        //     model: 'doc_justificatifs',
        //     key: 'id_doc_justificatifs'
        //   },
        //   onUpdate: 'restrict',
        //   onDelete: 'restrict'
        // },
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