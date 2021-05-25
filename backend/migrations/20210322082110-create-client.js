'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },

      tel: {
        type: Sequelize.INTEGER
      },

      adresse: {
        type: Sequelize.STRING
      },

      avatar: {
        type: Sequelize.STRING
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
        }
      );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clients');
  }
};
