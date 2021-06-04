'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Commandes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    //   id_livreur:
    // {
    //   type: DataTypes.INTEGER,
    //   allowNull: false, foreignKey: true,
    //   references: {
    //     model: 'livreurs',
    //     key: ' id_livreur'
    //   },

    //   id_admin:
    //   {
    //     type: Sequelize.INTEGER,
    //     allowNull: false, 
    //     references: {
    //       model: 'admins',
    //       key: 'id_admin'
    //     },

    //     id_client:
    //     {
    //       type: Sequelize.INTEGER,
    //       allowNull: false, 
    //       references: {
    //         model: 'clients',
    //         key: 'id_client'
    //       },
     
    //       onUpdate: 'restrict',
    //       onDelete: 'restrict' },


      prix: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      quantite: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      adresse_livraison: {
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
    await queryInterface.dropTable('Commandes');
  }
};