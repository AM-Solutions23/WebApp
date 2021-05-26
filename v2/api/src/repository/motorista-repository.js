const MasterRepository = require('./master-repository')

module.exports = class MotoristaRepository extends MasterRepository{
    constructor(){
        super('motorista')
    }
}