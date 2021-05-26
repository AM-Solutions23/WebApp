const MasterController = require("./master-controller");

module.exports = class VeiculoControllers extends MasterController {
    constructor(){
        super('veiculo')
    }
}