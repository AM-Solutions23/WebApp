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
      data_solicitacao: {
        type: Sequelize.DATE
      },
      data_coleta: {
        type: Sequelize.DATE
      },
      data_entrega: {
        type: Sequelize.DATE
      },
      local_coleta: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      valor_nota_fiscal: {
        type: Sequelize.STRING
      },
      prazo_maximo_entrega: {
        type: Sequelize.DATE
      },
      categoria_carga: {
        type: Sequelize.STRING
      },
      descricao_carga: {
        type: Sequelize.STRING
      },
      nome_carga: {
        type: Sequelize.STRING
      },
      peso_carga: {
        type: Sequelize.STRING
      },
      natureza_cfop: {
        type: Sequelize.STRING
      },
      cubagem: {
        type: Sequelize.STRING
      },
      volumes: {
        type: Sequelize.STRING
      },
      tipo_carregamento: {
        type: Sequelize.STRING
      },
      quantidade_carga: {
        type: Sequelize.INTEGER
      },
      tamanho_minimo_carroceria: {
        type: Sequelize.STRING
      },
      tamanho_maximo_carroceria: {
        type: Sequelize.STRING
      },
      modalidade_carga: {
        type: Sequelize.STRING
      },
      destinatario: {
        type: Sequelize.INTEGER
      },
      remetente: {
        type: Sequelize.INTEGER
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