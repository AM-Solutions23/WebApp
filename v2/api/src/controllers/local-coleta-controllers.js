const MasterController = require("./master-controller");

module.exports = class LocalColetaControllers extends MasterController {
    constructor(){
        super('localcoleta')
    }
}