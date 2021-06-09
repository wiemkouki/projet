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

      libelle: {
        type: Sequelize.STRING
      },
      url_doc: {
        type: Sequelize.STRING
      },

      is_valide: {
        type: Sequelize.BOOLEAN
      },
      id_livreur:
      {
        type: Sequelize.INTEGER,
        allowNull: true,
         foreignKey: true,
        references: {
          model: 'Livreurs',
          key: 'id'
        },

        onUpdate: 'restrict',
        onDelete: 'restrict'
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
