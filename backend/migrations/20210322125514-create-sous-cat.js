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
      nom_ss_cat: {
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
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sous_cats');
  }
};
