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
<<<<<<< HEAD
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
    
=======
      id_categorie:{
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      id: {
        type: Sequelize.INTEGER
      },
>>>>>>> fad83aabd2e226428c43716b3ddae6275bc2b0be
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