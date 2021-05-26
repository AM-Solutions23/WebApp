const MasterRepository = require('./master-repository')

module.exports = class SolicitacaoRepository extends MasterRepository{
    constructor(){
        super('solicitacao')
    }
}