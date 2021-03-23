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
      // id_commande:
      // {
      //   type: Sequelize.INTEGER,
      //   allowNull: false, foreignKey: true,
      //   references: {
      //     model: 'commandes',
      //     key: 'id'
      //   },
     
      // onUpdate: 'restrict',
      // onDelete: 'restrict' },
      //   id_panier:
      //   {
      //     type: Sequelize.INTEGER,
      //     allowNull: false, foreignKey: true,
      //     references: {
      //       model: 'Paniers',
      //       key: 'id'
      //     },
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