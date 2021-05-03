var DataTypes = require("sequelize").DataTypes;
var _Empresa = require("./empresa-model");
var _Solicitacao = require("./solicitacao-model");

function initModels(sequelize) {
  var Empresa = _Empresa(sequelize, DataTypes);
  var Solicitacao = _Solicitacao(sequelize, DataTypes);


  return {
    Empresa,
    Solicitacao,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
