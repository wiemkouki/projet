'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('produits',
    'id_stock', {
     type: Sequelize.INTEGER,
     allowNull: false,
     foreignKey:true,
     references: {
       model: 'stocks',
       key: 'id'
     },
     onUpdate: 'restrict',
     onDelete: 'restrict'
   },

   {
     after: 'id' /* after option is only supported by MySQL */
   });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('produits','id_stock' );
  }
};
