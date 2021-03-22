'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fiche_teches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_fiche: {
        type: Sequelize.INTEGER
      },
      caract_principale: {
        type: Sequelize.STRING
      },
      taille: {
        type: Sequelize.INTEGER
      },
      couleur: {
        type: Sequelize.STRING
      },
      modele: {
        type: Sequelize.STRING
      },
      matiere: {
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
    await queryInterface.dropTable('Fiche_teches');
  }
};