const MasterRepository = require('./master-repository')

module.exports = class ClientesRepository extends MasterRepository{
    constructor(){
        super('clientes')
    }
}