const MasterRepository = require('./master-repository')

module.exports = class EmpresaOperacaoRepository extends MasterRepository{
    constructor(){
        super('empresaoperacao')
    }
}