'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SolicitacaoCarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SolicitacaoCarga.init({
    id_solicitacao: DataTypes.INTEGER,
    id_carga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SolicitacaoCarga',
  });
  return SolicitacaoCarga;
};