const MasterController = require("./master-controller");

module.exports = class ClientesControllers extends MasterController {
    constructor(){
        super('clientes')
    }
}