'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Empresas', [{
      nome: 'root',
      password: 'sha1$c7b2c993$1$3d29cb901b2f49b48465276f8e69d9a566acc2a9',
      CNPJ: '00000'
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
