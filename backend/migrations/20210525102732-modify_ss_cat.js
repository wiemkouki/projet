'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Sous_cats', 'id__categorie', {
      type: Sequelize.INTEGER,
      allowNull: true,
      foreignKey:true,
      references: {
        model: 'Categories',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },{
      after: 'id' /* after option is only supported by MySQL */
    });
  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Sous_cats', 'id__categorie');
  }
};
