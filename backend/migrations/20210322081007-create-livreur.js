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
      // id_doc_justificatifs:{
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'doc_justificatifs',
      //     key: 'id'
      //   },
      //   onUpdate: 'restrict',
      //   onDelete: 'restrict'
      // },
       id_commande:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Commandes',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      permis: {
        type: Sequelize.STRING
      },
      cin: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Livreurs');
  }
};