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
<<<<<<< HEAD
      id_client:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey:true,
      references: {
        model: 'clients',
        key: 'id'
=======
      id: {
        type: Sequelize.INTEGER
      },
      id_client: {
        type: Sequelize.INTEGER,
        foreignKey: true
>>>>>>> fad83aabd2e226428c43716b3ddae6275bc2b0be
      },
      onUpdate: 'restrict',
      onDelete: 'restrict' },

      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
<<<<<<< HEAD
      }
     } );
=======
      },
      
    });
>>>>>>> fad83aabd2e226428c43716b3ddae6275bc2b0be
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('paniers');
  }
};