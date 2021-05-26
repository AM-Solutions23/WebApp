'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Carga.init({
    id_solicitacao: DataTypes.INTEGER,
    categoria: DataTypes.STRING,
    descricao: DataTypes.STRING,
    nome: DataTypes.STRING,
    peso: DataTypes.STRING,
    natureza_cfop: DataTypes.STRING,
    cubagem: DataTypes.STRING,
    quantidade_unidade: DataTypes.STRING,
    volumes: DataTypes.STRING,
    tamanho_minimo_carroceria: DataTypes.STRING,
    tamanho_maximo_carroceria: DataTypes.STRING,
    tipo_carregamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carga',
  });
  return Carga;
};