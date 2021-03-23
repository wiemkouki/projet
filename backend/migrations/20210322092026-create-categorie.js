'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD
   
     
=======
      id_sous_categorie:{
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      code_cat: {
        type: Sequelize.INTEGER
      },
>>>>>>> fad83aabd2e226428c43716b3ddae6275bc2b0be
      nom_cat: {
        type: Sequelize.STRING
      },
      famille: {
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
    await queryInterface.dropTable('Categories');
  }
};