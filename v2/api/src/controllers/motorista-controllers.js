const MasterController = require("./master-controller");

module.exports = class MotoristaControllers extends MasterController {
    constructor(){
        super('motorista')
    }
}