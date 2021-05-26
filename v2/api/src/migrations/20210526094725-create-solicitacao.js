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
      id_empresa_distribuicao: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_veiculo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_motorista: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_local_coleta: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_local_entrega: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data_coleta: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_entrega: {
        type: Sequelize.DATE
      },
      prazo_maximo_entrega: {
        type: Sequelize.DATE,
        allowNull: false
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