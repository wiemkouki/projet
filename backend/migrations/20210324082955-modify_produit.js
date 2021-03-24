'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('produits', 'id_images_produit', {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey:true,
      references: {
        model: 'images_produits',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },{
      after: 'id' /* after option is only supported by MySQL */
    });
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.removeColumn('produits', 'id_images_produit');
  }
};