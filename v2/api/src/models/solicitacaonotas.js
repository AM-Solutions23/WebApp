'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SolicitacaoNotas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SolicitacaoNotas.init({
    id_solicitacao: DataTypes.INTEGER,
    id_nota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SolicitacaoNotas',
  });
  return SolicitacaoNotas;
};