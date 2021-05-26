'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destinatario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Destinatario.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    numero_endereco: DataTypes.STRING,
    numero_telefone: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    cnpj: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destinatario',
  });
  return Destinatario;
};