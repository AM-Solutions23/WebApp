const MasterRepository = require('./master-repository')

module.exports = class CargarRepository extends MasterRepository{
    constructor(){
        super('carga')
    }
}