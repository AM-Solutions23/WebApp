let DataTypes = require("sequelize").DataTypes;
let _Empresa = require("./empresa-model");
let _Solicitacao = require("./solicitacao-model");

function initModels(sequelize) {
  let Empresa = _Empresa(sequelize, DataTypes);
  let Solicitacao = _Solicitacao(sequelize, DataTypes);


  return {
    Empresa,
    Solicitacao,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
