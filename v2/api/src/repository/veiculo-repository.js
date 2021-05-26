const MasterRepository = require('./master-repository')

module.exports = class VeiculoRepository extends MasterRepository{
    constructor(){
        super('veiculo')
    }
}