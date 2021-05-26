const MasterRepository = require('./master-repository')


module.exports = class SolicitacaoRepository extends MasterRepository {
    constructor() {
        super('solicitacao')
    }

    estatisticas = async () => {
        const solicitados = await this.entity.findAll({
            where: {
                'status': 'solicitado'
            },
            limit: 6
        })

        const em_andamento = await this.entity.findAll({
            where: {
                'status': 'em-andamento'
            },
            limit: 6
        })

        return {
            solicitados, em_andamento
        }
    }
}