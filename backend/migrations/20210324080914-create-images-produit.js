'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images_produits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      url: {
        type: Sequelize.STRING
      },
      is_deleted:{
        type: Sequelize.BOOLEAN
      },
      id_produit:
      {
        type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'produits',
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('images_produits');
  }
};
