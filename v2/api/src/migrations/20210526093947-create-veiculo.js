'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Veiculos', {
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
      tamanho_carroceria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_caminhao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_carroceria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      placa: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
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
    await queryInterface.dropTable('Veiculos');
  }
};