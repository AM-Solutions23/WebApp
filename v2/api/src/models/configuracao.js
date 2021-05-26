'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Configuracao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Configuracao.init({
    theme_mode: DataTypes.STRING,
    logomarca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Configuracao',
  });
  return Configuracao;
};