"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Solicitacaos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome_destinatario: {
        type: Sequelize.STRING,
      },
      endereco_destinatario: {
        type: Sequelize.STRING,
      },
      numero_endereco_destinatario: {
        type: Sequelize.STRING,
      },
      numero_telefone_destinatario: {
        type: Sequelize.STRING,
      },
      complemento_destinatario: {
        type: Sequelize.STRING,
      },
      nome_local_entrega: {
        type: Sequelize.STRING,
      },
      cep_destinatario: {
        type: Sequelize.STRING,
      },
      documento_destinatario: {
        type: Sequelize.STRING,
      },
      cidade_destinatario: {
        type: Sequelize.STRING,
      },
      estado_destinatario: {
        type: Sequelize.STRING,
      },
      id_coleta: {
        type: Sequelize.INTEGER,
      },
      id_empresa_operacao: {
        type: Sequelize.INTEGER,
      },
      id_empresa_distribuicao: {
        type: Sequelize.INTEGER,
      },
      id_veiculo: {
        type: Sequelize.INTEGER,
      },
      id_motorista: {
        type: Sequelize.INTEGER,
      },
      data_coleta: {
        type: Sequelize.DATE,
      },
      data_entrega: {
        type: Sequelize.DATE,
      },
      data_solicitacao: {
        type: Sequelize.DATE,
      },
      prazo_maximo_entrega: {
        type: Sequelize.DATE,
      },
      valor_nota_fiscal: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      categoria_carga: {
        type: Sequelize.STRING,
      },
      nome_carga: {
        type: Sequelize.STRING,
      },
      volumes_carga: {
        type: Sequelize.STRING,
      },
      quantidade_unidade: {
        type: Sequelize.INTEGER,
      },
      peso_carga: {
        type: Sequelize.STRING,
      },
      cfop: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Solicitacaos");
  },
};
