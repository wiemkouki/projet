'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('stocks', 'id_produit', {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey:true,
      references: {
        model: 'Produits',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },{
      after: 'id' /* after option is only supported by MySQL */
    });
  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('stocks', 'id_produit');
  }
};
