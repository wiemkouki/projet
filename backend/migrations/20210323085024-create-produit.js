'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom_p: {
        type: Sequelize.STRING
      },
      prix: {
        type: Sequelize.INTEGER
      },
      max_rating: {
        type: Sequelize.INTEGER
      },
      disponible: {
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
    await queryInterface.dropTable('Produits');
  }
};