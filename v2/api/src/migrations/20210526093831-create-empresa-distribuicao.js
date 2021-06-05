'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmpresaDistribuicaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      inscricao_estadual: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_empresa_operacao: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('EmpresaDistribuicaos');
  }
};