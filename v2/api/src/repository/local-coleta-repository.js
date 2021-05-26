const MasterRepository = require('./master-repository')

module.exports = class LocalColetaRepository extends MasterRepository{
    constructor(){
        super('localcoleta')
    }
}