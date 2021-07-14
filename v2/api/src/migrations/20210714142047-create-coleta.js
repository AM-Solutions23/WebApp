'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coleta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_local_coleta: {
        type: Sequelize.STRING
      },
      cep_coleta: {
        type: Sequelize.STRING
      },
      cidade_coleta: {
        type: Sequelize.STRING
      },
      endereco_coleta: {
        type: Sequelize.STRING
      },
      estado_coleta: {
        type: Sequelize.STRING
      },
      numero_endereco_coleta: {
        type: Sequelize.STRING
      },
      referencia_coleta: {
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
    await queryInterface.dropTable('Coleta');
  }
};