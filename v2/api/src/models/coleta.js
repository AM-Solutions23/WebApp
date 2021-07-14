'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coleta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Coleta.init({
    nome_local_coleta: DataTypes.STRING,
    cep_coleta: DataTypes.STRING,
    cidade_coleta: DataTypes.STRING,
    endereco_coleta: DataTypes.STRING,
    estado_coleta: DataTypes.STRING,
    numero_endereco_coleta: DataTypes.STRING,
    referencia_coleta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coleta',
  });
  return Coleta;
};