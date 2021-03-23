'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // id_commande:
      // {
      //   type: Sequelize.INTEGER,
      //   allowNull: false, foreignKey: true,
      //   references: {
      //     model: 'commandes',
      //     key: 'id',},
      //     onUpdate: 'restrict',
      //     onDelete: 'restrict'
      //   },
      //   id_stock:
      //   {type: Sequelize.INTEGER,
      //     allowNull: false,
      //     foreignKey: true,
      //     references: {
      //       model: 'Stock',
      //       key: 'id'
      //     },

      nom_boutique: {
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
      logo: {
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
    //  
   });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Admins');
  }
};