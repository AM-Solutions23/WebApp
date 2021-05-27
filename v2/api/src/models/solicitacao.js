'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solicitacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Solicitacao.init({
    id_empresa_operacao: DataTypes.INTEGER,
    id_empresa_distribuicao: DataTypes.INTEGER,
    id_veiculo: DataTypes.INTEGER,
    id_motorista: DataTypes.INTEGER,
    id_cliente: DataTypes.INTEGER,
    id_local_coleta: DataTypes.INTEGER,
    id_local_entrega: DataTypes.INTEGER,
    data_coleta: DataTypes.DATE,
    data_entrega: DataTypes.DATE,
    data_solicitacao: DataTypes.DATE,
    prazo_maximo_entrega: DataTypes.DATE,
    valor_nota_fiscal: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Solicitacao',
  });
  return Solicitacao;
};