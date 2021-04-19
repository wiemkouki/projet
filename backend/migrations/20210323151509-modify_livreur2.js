'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('livreurs', 'id_doc_justificatif', {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey:true,
      references: {
        model: 'doc_justificatifs',
        key: 'id'
      },
      onUpdate: 'restrict',
      onDelete: 'restrict'
    },{
      after: 'id' 
    });
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.removeColumn('livreurs', 'id_doc_justificatif');
  }
};

