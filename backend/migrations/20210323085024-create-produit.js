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
<<<<<<< HEAD:backend/migrations/20210322093000-create-produit.js
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
        // id_panier:
        // {
        //   type: Sequelize.INTEGER,
        //   allowNull: false,
        //   references: {
        //     model: 'paniers',
        //     key: 'id'
        //   },
     
        //   onUpdate: 'restrict',
        //   onDelete: 'restrict' },
      libelle: {
        type: Sequelize.STRING
      },
      marque: {
=======
      nom_p: {
>>>>>>> fad83aabd2e226428c43716b3ddae6275bc2b0be:backend/migrations/20210323085024-create-produit.js
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