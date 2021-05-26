'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmpresaDistribuicao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EmpresaDistribuicao.init({
    cnpj: DataTypes.STRING,
    nome: DataTypes.STRING,
    inscricao_estadual: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmpresaDistribuicao',
  });
  return EmpresaDistribuicao;
};