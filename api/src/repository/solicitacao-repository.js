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
}