const MasterRepository = require('./master-repository')

module.exports = class EmpresaDistribuicaoRepository extends MasterRepository{
    constructor(){
        super('empresadistribuicao')
    }
}