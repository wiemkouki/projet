'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('admins', 'id_categorie', {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey:true,
      references: {
        model: 'categories',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },{
      after: 'id' /* after option is only supported by MySQL */
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('admins', 'id_categorie');
  }
};
