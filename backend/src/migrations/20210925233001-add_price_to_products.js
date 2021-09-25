'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Products',
      'price',
      Sequelize.INTEGER
    );
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn(
      'Products',
      'price'
    );
  }
};
