'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Clientes', [{
      nome: 'Cliente 1',
      endereco: 'Cliente 1 endereco',
      numero_endereco: '3000',
      numero_telefone: '4309892883',
      complemento: 'casa',
      cep:'23445-000',
      cidade:'SP',
      estado: 'SP',
      documento:'92348903'
    }])
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
