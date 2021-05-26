const MasterController = require("./master-controller");

module.exports = class OperadorControllers extends MasterController {
    constructor(){
        super('operador')
    }
}