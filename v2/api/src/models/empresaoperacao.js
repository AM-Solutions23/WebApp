'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmpresaOperacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EmpresaOperacao.init({
    nome: DataTypes.STRING,
    email_geral: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'EmpresaOperacao',
  });
  return EmpresaOperacao;
};