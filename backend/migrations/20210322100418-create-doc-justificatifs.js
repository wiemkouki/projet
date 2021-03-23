'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doc_justificatifs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_livreur:{
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      id_sup_admin:{
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      libelle: {
        type: Sequelize.STRING
      },
      url_doc: {
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
    await queryInterface.dropTable('doc_justificatifs');
  }
};