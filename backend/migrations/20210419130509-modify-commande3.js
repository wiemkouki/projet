'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('commandes', 'id_produit', {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey:true,
      references: {
        model: 'produits',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },{
      after: 'id' 
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('commandes', 'id_produit');
  }
};
