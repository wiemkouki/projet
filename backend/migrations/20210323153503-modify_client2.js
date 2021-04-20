'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('clients',
     'id_panier', {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey:true,
      references: {
        model: 'paniers',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },

    {
      after: 'id' /* after option is only supported by MySQL */
    });
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.removeColumn('clients','id_panier' );
  }
};
