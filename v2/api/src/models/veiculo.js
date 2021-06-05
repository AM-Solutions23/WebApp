'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Veiculo.init({
    id_empresa_operacao: DataTypes.INTEGER,
    id_empresa_distribuicao: DataTypes.INTEGER,
    tamanho_carroceria: DataTypes.STRING,
    tipo_caminhao: DataTypes.STRING,
    tipo_carroceria: DataTypes.STRING,
    placa: DataTypes.STRING,
    marca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Veiculo',
  });
  return Veiculo;
};