const MasterController = require("./master-controller");

module.exports = class LocalEntregaControllers extends MasterController {
    constructor(){
        super('localentrega')
    }
}