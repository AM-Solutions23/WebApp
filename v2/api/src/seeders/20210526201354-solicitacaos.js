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
   await queryInterface.bulkInsert('Solicitacaos',[{
     "id_empresa_operacao": 1,
      "id_empresa_distribuicao":1,
      "id_veiculo":1,
      "id_motorista":1,
      "id_cliente":1,
      "id_local_entrega":1,
      "id_local_coleta":1,
      "data_solicitacao":"2021-05-25T13:57:56.000000Z",
      "data_entrega":"2021-05-25T13:57:56.000000Z",
      "status":"solicitado",
      "valor_nota_fiscal":"12.000",
      "prazo_maximo_entrega":"2021-05-25T13:57:56.000000Z"
  
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
