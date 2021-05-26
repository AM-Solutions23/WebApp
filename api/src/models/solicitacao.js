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
    data_solicitacao: DataTypes.DATE,
    data_coleta: DataTypes.DATE,
    data_entrega: DataTypes.DATE,
    local_coleta: DataTypes.STRING,
    status: DataTypes.STRING,
    valor_nota_fiscal: DataTypes.STRING,
    prazo_maximo_entrega: DataTypes.DATE,
    categoria_carga: DataTypes.STRING,
    descricao_carga: DataTypes.STRING,
    nome_carga: DataTypes.STRING,
    peso_carga: DataTypes.STRING,
    natureza_cfop: DataTypes.STRING,
    cubagem: DataTypes.STRING,
    volumes: DataTypes.STRING,
    tipo_carregamento: DataTypes.STRING,
    quantidade_carga: DataTypes.INTEGER,
    tamanho_minimo_carroceria: DataTypes.STRING,
    tamanho_maximo_carroceria: DataTypes.STRING,
    modalidade_carga: DataTypes.STRING,
    destinatario: DataTypes.INTEGER,
    remetente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Solicitacao',
  });
  return Solicitacao;
};