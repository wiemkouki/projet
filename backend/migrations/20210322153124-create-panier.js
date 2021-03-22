'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('paniers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_client:
      {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'client',
          key: 'id'
        },
    }});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('paniers');
  }
};