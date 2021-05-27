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

    createNewSolicitacao = async (data, request_data) => {

        const new_cliente = await this.entities.clientes.create(data.cliente_data)
        const new_local_entrega = await this.entities.localentrega.create(data.local_entrega_data)
        const new_local_coleta = await this.entities.localcoleta.create(data.local_coleta_data)

        const solicitacao = {
            id_empresa_operacao: request_data.solicitacao_id_empresa_solicitacao,
            id_empresa_distribuicao: request_data.solicitacao_empresa_distribuicao,
            id_veiculo: request_data.solicitacao_veiculo,
            id_motorista: request_data.solicitacao_motorista,
            id_cliente: new_cliente.id,
            id_local_coleta: new_local_coleta.id,
            id_local_entrega: new_local_entrega.id,
            data_coleta: request_data.solicitacao_data_coleta,
            data_solicitacao: request_data.solicitacao_data_solicitacao,
            prazo_maximo_entrega: request_data.solicitacao_prazo,
            valor_nota_fiscal: request_data.solicitacao_valor_nota_fiscal,
            status: request_data.solicitacao_status
        }

        const new_solicitacao = await this.entities.solicitacao.create(solicitacao)
        return new_solicitacao
    }
}