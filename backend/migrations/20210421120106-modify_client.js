'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('clients', 'id_user', {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey:true,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },{
      after: 'id' /* after option is only supported by MySQL */
    });
  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('clients', 'id_user');
  }
};
