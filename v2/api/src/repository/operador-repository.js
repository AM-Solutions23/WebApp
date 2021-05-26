const MasterRepository = require('./master-repository')

module.exports = class OperadorRepository extends MasterRepository{
    constructor(){
        super('operador')
    }
}