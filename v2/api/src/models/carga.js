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
    categoria_carga: DataTypes.STRING,
    nome_carga: DataTypes.STRING,
    comprimento_carga: DataTypes.STRING,
    largura_carga: DataTypes.STRING,
    altura_carga: DataTypes.STRING,
    volumes_carga: DataTypes.FLOAT,
    peso_carga: DataTypes.FLOAT,
    tipo_carregamento_carga: DataTypes.STRING,
    cfop: DataTypes.STRING,
    descricao_carga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carga',
  });
  return Carga;
};