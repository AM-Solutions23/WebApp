'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Solicitacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_empresa_operacao: {
        type: Sequelize.INTEGER
      },
      id_empresa_distribuicao: {
        type: Sequelize.INTEGER
      },
      id_veiculo: {
        type: Sequelize.INTEGER
      },
      id_motorista: {
        type: Sequelize.INTEGER
      },
      id_cliente: {
        type: Sequelize.INTEGER
      },
      id_local_coleta: {
        type: Sequelize.INTEGER
      },
      id_local_entrega: {
        type: Sequelize.INTEGER
      },
      data_coleta: {
        type: Sequelize.DATE
      },
      data_entrega: {
        type: Sequelize.DATE
      },
      data_solicitacao: {
        type: Sequelize.DATE
      },
      prazo_maximo_entrega: {
        type: Sequelize.DATE
      },
      valor_nota_fiscal: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Solicitacaos');
  }
};