const MasterRepository = require("./master-repository");

module.exports = class ColetaRepository extends MasterRepository {
  constructor() {
    super("coleta");
  }
};
