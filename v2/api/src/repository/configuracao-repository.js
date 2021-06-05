const MasterRepository = require('./master-repository')

module.exports = class ConfiguracaoRepository extends MasterRepository{
    constructor(){
        super('configuracao')
    }
}