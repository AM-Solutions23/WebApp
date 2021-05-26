'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LocalEntrega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LocalEntrega.init({
    nome: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    endereco: DataTypes.STRING,
    numero_endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LocalEntrega',
  });
  return LocalEntrega;
};