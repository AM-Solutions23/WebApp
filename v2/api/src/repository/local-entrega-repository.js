const MasterRepository = require('./master-repository')

module.exports = class LocalEntregaRepository extends MasterRepository{
    constructor(){
        super('localentrega')
    }
}