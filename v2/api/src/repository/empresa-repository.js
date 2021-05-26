const MasterRepository = require('./master-repository')

module.exports = class EmpresaRepository extends MasterRepository{
    constructor(){
        super('empresa')
    }
}