const MasterRepository = require('./master-repository')

module.exports = class MotoristaRepository extends MasterRepository {
    constructor() {
        super('motorista')
    }

    getAll = async (token) => {
        console.log(token)
        const motoristas_data = await this.entity.findAll({
            where: {
                id_empresa_operacao: token
            }
        })
        let all_data = []
        for(let i = 0; i < motoristas_data.length; i++){
            var empresa = await  this.entities.empresadistribuicao.findOne({
                where: {
                    id: motoristas_data[i].id_empresa_distribuicao
                }
            })

            all_data.push(Object.assign({},motoristas_data[i].dataValues,{empresa_associado:empresa}))
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
