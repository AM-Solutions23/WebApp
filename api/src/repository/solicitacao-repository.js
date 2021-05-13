const MasterRepository = require('./master-repository')

module.exports = class SolicitacaoRepository extends MasterRepository {
    constructor() {
        super('solicitacao')
    }

    searchSolicitacaoByStatus = async (status) => {
        const solicitacoes = await this.entity.findAll({
            where: {
                status: status
            }
        })

        return solicitacoes
    }

    estatisticasSolicitacoes = async () => {
        const n_solicitacoes_solicitadas = await this.entity.count({
            where: {
                status: 'solicitado'
            }
        })

        const n_solicitacoes_em_andamento = await this.entity.count({
            where: {
                status: 'em-andamento'
            }
        })

        const n_solicitacoes_concluido = await this.entity.count({
            where: {
                status: 'entregue'
            }
        })
        return [n_solicitacoes_solicitadas, n_solicitacoes_em_andamento, n_solicitacoes_concluido]
    }
}