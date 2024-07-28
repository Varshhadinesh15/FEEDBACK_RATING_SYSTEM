'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('reviews', 'instructorreview', {
      type: Sequelize.STRING,
      allowNull: true, // Or false, depending on your requirements
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('reviews', 'instructorreview');
  }
};

