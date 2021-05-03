const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Empresa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "CNPJ"
    },
  /*   created_at: {
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
    tableName: 'Empresa',
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
      {
        name: "CNPJ",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CNPJ" },
        ]
      },
    ]
  });
};
