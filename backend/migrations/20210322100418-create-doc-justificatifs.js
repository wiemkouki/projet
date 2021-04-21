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
      is_deleted: {
        type: Sequelize.BOOLEAN
      },
      id_sup_admin:
      {
        type: Sequelize.INTEGER,
        allowNull: false, foreignKey: true,
        references: {
          model: 'sup_admins',
          key: 'id'
        },

        onUpdate: 'restrict',
        onDelete: 'restrict'
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
