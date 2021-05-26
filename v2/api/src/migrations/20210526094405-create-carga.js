'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cargas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_solicitacao: {
        type: Sequelize.INTEGER
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      peso: {
        type: Sequelize.STRING,
        allowNull: false
      },
      natureza_cfop: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cubagem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantidade_unidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      volumes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tamanho_minimo_carroceria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tamanho_maximo_carroceria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_carregamento: {
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
    await queryInterface.dropTable('Cargas');
  }
};