'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InsertPesoTotalSolicitation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  InsertPesoTotalSolicitation.init({
    peso_total_cargas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InsertPesoTotalSolicitation',
  });
  return InsertPesoTotalSolicitation;
};