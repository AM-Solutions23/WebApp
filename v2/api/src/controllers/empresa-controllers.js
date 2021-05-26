const MasterController = require("./master-controller");

module.exports = class EmpresaControllers extends MasterController {
    constructor(){
        super('empresa')
    }
}