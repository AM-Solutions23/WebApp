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
      categoria_carga: {
        type: Sequelize.STRING
      },
      nome_carga: {
        type: Sequelize.STRING
      },
      comprimento_carga: {
        type: Sequelize.STRING
      },
      largura_carga: {
        type: Sequelize.STRING
      },
      altura_carga: {
        type: Sequelize.STRING
      },
      volumes_carga: {
        type: Sequelize.FLOAT
      },
      peso_carga: {
        type: Sequelize.FLOAT
      },
      tipo_carregamento_carga: {
        type: Sequelize.STRING
      },
      cfop: {
        type: Sequelize.STRING
      },
      descricao_carga: {
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
    await queryInterface.dropTable('Cargas');
  }
};