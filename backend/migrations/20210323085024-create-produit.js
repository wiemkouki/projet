'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_commande:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'commandes',
          key: 'id'
        },
     
        onUpdate: 'restrict',
        onDelete: 'restrict' },

      //    id_images_produit:
      // {
      //   type: Sequelize.INTEGER,
      //     allowNull: false,
      //     references: {
      //         model: 'images_produits',
      //         key: 'id'
      //       },
       
      //       onUpdate: 'restrict',
      //       onDelete: 'restrict' },

        id_panier:
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'paniers',
            key: 'id'
          },
     
          onUpdate: 'restrict',
          onDelete: 'restrict' },
      libelle: {
        type: Sequelize.STRING
      },
      marque: {
        type: Sequelize.STRING
      },
      prix: {
        type: Sequelize.INTEGER
      },
      max_rating: {
        type: Sequelize.INTEGER
      },
      disponible: {
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
    await queryInterface.dropTable('Produits');
  }
};