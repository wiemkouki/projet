'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('clients',
     'id_commande', {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey:true,
      references: {
        model: 'commandes',
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
    return queryInterface.removeColumn('clients','id_commande' );
  }
};
