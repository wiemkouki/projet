'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('Livreurs',
     'id_user', {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey:true,
      references: {
        model: 'users',
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
    return queryInterface.removeColumn('Livreurs','id_user' );
  }
};
