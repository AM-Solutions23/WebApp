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
    nome_destinatario: DataTypes.STRING,
    endereco_destinatario: DataTypes.STRING,
    numero_endereco_destinatario: DataTypes.STRING,
    numero_telefone_destinatario: DataTypes.STRING,
    complemento_destinatario: DataTypes.STRING,
    nome_local_entrega:DataTypes.STRING,
    cep_destinatario: DataTypes.STRING,
    documento_destinatario: DataTypes.STRING,
    cidade_destinatario: DataTypes.STRING,
    estado_destinatario: DataTypes.STRING,
    nome_local_coleta: DataTypes.STRING,
    endereco_coleta:DataTypes.STRING,
    cep_coleta: DataTypes.STRING,
    cidade_coleta: DataTypes.STRING,
    estado_coleta: DataTypes.STRING,
    numero_endereco_coleta: DataTypes.STRING,
    id_empresa_operacao: DataTypes.INTEGER,
    id_empresa_distribuicao: DataTypes.INTEGER,
    id_veiculo: DataTypes.INTEGER,
    id_motorista: DataTypes.INTEGER,
    data_coleta: DataTypes.DATE,
    data_entrega: DataTypes.DATE,
    data_solicitacao: DataTypes.DATE,
    prazo_maximo_entrega: DataTypes.DATE,
    valor_nota_fiscal: DataTypes.STRING,
    status: DataTypes.STRING,
    categoria_carga: DataTypes.STRING,
    nome_carga: DataTypes.STRING,
    volumes_carga: DataTypes.STRING,
    quantidade_unidade: DataTypes.INTEGER,
    peso_carga: DataTypes.STRING,
    cfop: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Solicitacao',
  });
  return Solicitacao;
};