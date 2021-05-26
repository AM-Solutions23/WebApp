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
   await queryInterface.bulkInsert('LocalColeta',[{
     nome:'local coleta 1',
     cep:'1212',
     cidade:'cidade coleta 1',
     estado: 'estado coleta 1',
     endereco: 'endereco coleta 1',
     numero_endereco: 'n endereco coleta 1' 
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
