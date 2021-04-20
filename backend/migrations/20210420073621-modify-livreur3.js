'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    return queryInterface.addColumn('livreurs', 'id_admins', {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey:true,
      references: {
        model: 'Admins',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },{
      after: 'id' /* after option is only supported by MySQL */
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('livreurs', 'id_admins');
  }
};
