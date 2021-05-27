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
        let new_cliente = {}
        let new_local_entrega = {}
        let new_local_coleta = {}

        try {
            new_cliente = await this.entities.clientes.create(data.cliente_data)
        } catch (insert_client_error) {
            //throw new Error(`${insertError}`) //development mode
            return false
        }
        try {
            new_local_entrega = await this.entities.localentrega.create(data.local_entrega_data)
        } catch (insert_local_entrega_error) {
            return false
        }
        try {
            new_local_coleta = await this.entities.localcoleta.create(data.local_coleta_data)
        } catch (insert_local_coleta_error) {
            return false
        }

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

        let new_solicitacao = {}
        try {

            new_solicitacao = await this.entities.solicitacao.create(solicitacao)
        } catch (insert_solicitacao_error) {
            return false
        }
        return true
    }

    updateSolicitacao = async (data) => {
        const solicitacao = await this.getOne(data.cliente_data.id)
        try {
            await this.entities.clientes.update(data.cliente_data, {
                where: {
                    id: solicitacao.id
                }
            })
        } catch (update_cliente_error) {
            return false
        }

        try {
            await this.entities.localentrega.update(data.local_entrega_data, {
                where: {
                    id: solicitacao.id_local_entrega
                }
            })
        } catch (update_local_entrega_error) {
            return false
        }

        try {
            await this.entities.localcoleta.update(data.local_coleta_data, {
                where: {
                    id: solicitacao.id_local_coleta
                }
            })
        } catch (update_local_coleta_error) {
            return false
        }

        try {
            await this.entity.update(data.solicitacao_data, {
                where: {
                    id: solicitacao.id
                }
            })
        } catch (update_solicitacao_error) {
            return false
        }
        return true
    }

}