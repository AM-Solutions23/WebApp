'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Cargas', [{
      id_solicitacao: 1,
      categoria: 'carga normal',
      descricao: 'Descricao da carga',
      nome: 'Carga 1',
      peso: '10 KG',
      natureza_cfop: 'CFOP',
      cubagem: 'Cubagem Carga',
      quantidade_unidade: '10',
      volumes: '2',
      tamanho_minimo_carroceria: '10x10',
      tamanho_maximo_carroceria: '11x12',
      tipo_carregamento: 'Tipo carga'
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
