'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Commandes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_livreur:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Livreurs',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      id_admin:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Admins',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      id_client:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id'
        },
        onUpdate: 'restrict',
        onDelete: 'restrict'
      },
      prix: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      quantite: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      adresse_livraison: {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Commandes');
  }
};