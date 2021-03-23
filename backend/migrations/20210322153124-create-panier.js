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
      id_client:
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey:true,
      references: {
        model: 'clients',
        key: 'id'
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
      }
     } );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('paniers');
  }
};