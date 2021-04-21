'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('notePdts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_client:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clients',
          key: 'id'
        },

        onUpdate: 'restrict',
        onDelete: 'restrict' },

      id_produit:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'produits',
          key: 'id'
        },

        onUpdate: 'restrict',
        onDelete: 'restrict' },

      rating: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('notePdts');
  }
};
