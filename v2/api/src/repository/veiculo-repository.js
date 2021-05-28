const MasterRepository = require('./master-repository')

module.exports = class VeiculoRepository extends MasterRepository{
    constructor(){
        super('veiculo')
    }

    getAll = async () => {
        const veiculo_data = await this.entity.findAll()
        let all_data = []
        for(let i = 0; i < veiculo_data.length; i++){
            var empresa = await  this.entities.empresadistribuicao.findOne({
                where: {
                    id: veiculo_data[i].id_empresa_distribuicao
                }
            })

            all_data.push(Object.assign({},veiculo_data[i].dataValues,{empresa_associado:empresa}))
        }
        return all_data
    }

    getOne = async (ID) => {
        const fetched_data = await this.entity.findByPk(ID)
        if (fetched_data == null) {
            return {}
        }

        var empresa = await this.entities.empresadistribuicao.findOne({
            where: {
                id: fetched_data.id_empresa_distribuicao
            }
        })

        const data = Object.assign({},fetched_data.dataValues,{empresa_associado:empresa})
        return data
    }
}