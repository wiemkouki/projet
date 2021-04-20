'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sous_cats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_categorie:
    {
      type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
          },

          onUpdate: 'restrict',
          onDelete: 'restrict' },
          
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
    await queryInterface.dropTable('Sous_cats');
  }
};
