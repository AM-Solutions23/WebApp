'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motorista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Motorista.init({
    id_empresa_distribuicao: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    cnh: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Motorista',
  });
  return Motorista;
};