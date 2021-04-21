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
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      is_deleted:{
        type: Sequelize.BOOLEAN
      }, 
      // id_user:
      // {
      //   type: Sequelize.INTEGER,
      //   allowNull: true,
      //   references: {
      //     model: 'User',
      //     key: 'id'
      //   },

      //   onUpdate: 'restrict',
      //   onDelete: 'restrict' },

        // id_notePdt:
        // {
        //   type: Sequelize.INTEGER,
        //   allowNull: true,
        //   references: {
        //     model: 'notePdt',
        //     key: 'id'
        //   },
  
        //   onUpdate: 'restrict',
        //   onDelete: 'restrict' },
  
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
