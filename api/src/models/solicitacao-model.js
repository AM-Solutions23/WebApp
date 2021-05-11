const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Solicitacao', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data_solicitacao: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_coleta: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_entrega_prevista: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    data_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    local_coleta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    local_entrega: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    n_telefone_destinatario: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nome_motorista: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo_de_caminhao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tempo_total: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    kilometragem_percorrida: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    valor_nota_fiscal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    categoria_da_carga: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descricao_da_carga: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nome_destinatario: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    endereco_destinatario: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    numero_endereco_destinatario: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    complemento_destinatario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CEP_destinatario: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    cidade_destinatario: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estado_destinatario: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    nome_remetente: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CNPJ_remetente: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    inscricao_estadual_remetente: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
 /*    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    } */
  }, {
    sequelize,
    tableName: 'Solicitacao',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
