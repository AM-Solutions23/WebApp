'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transportes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_motorista: {
        type: Sequelize.STRING
      },
      tipo_de_caminhao: {
        type: Sequelize.STRING
      },
      tempo_total: {
        type: Sequelize.STRING
      },
      kilometragem_percorrida: {
        type: Sequelize.STRING
      },
      tipo_de_carroceria: {
        type: Sequelize.STRING
      },
      tipo_de_assoalho: {
        type: Sequelize.STRING
      },
      tempo_total: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Transportes');
  }
};