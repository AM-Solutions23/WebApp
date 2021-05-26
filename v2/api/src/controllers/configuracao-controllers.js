const MasterController = require("./master-controller");

module.exports = class ConfiguracaoControllers extends MasterController {
    constructor(){
        super('configuracao')
    }
}