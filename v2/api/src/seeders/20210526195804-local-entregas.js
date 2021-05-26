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
     await queryInterface.bulkInsert('LocalEntregas',[{
      nome:'local entrega 1',
      cep:'1212',
      cidade:'cidade entrega 1',
      estado: 'estado entrega 1',
      endereco: 'endereco entrega 1',
      numero_endereco: 'n endereco entrega 1' 
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
