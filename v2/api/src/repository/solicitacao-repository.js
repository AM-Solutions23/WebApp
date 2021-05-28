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

    getAll = async () => {
        const solicitacao_data = await this.entity.findAll()
        let all_data = []
        for (let i = 0; i < solicitacao_data.length; i++) {
            var empresa_distribuicao = await this.entities.empresadistribuicao.findOne({
                where: {
                    id: solicitacao_data[i].id_empresa_distribuicao
                }
            })

            var empresa_operacao = await this.entities.empresaoperacao.findOne({
                where: {
                    id: solicitacao_data[i].id_empresa_operacao
                }
            })

            var veiculo = await this.entities.veiculo.findOne({
                where: {
                    id: solicitacao_data[i].id_veiculo
                }
            })

            var motorista = await this.entities.motorista.findOne({
                where: {
                    id: solicitacao_data[i].id_motorista
                }
            })

            var cliente = await this.entities.clientes.findOne({
                where: {
                    id: solicitacao_data[i].id_cliente
                }
            })

            var local_entrega = await this.entities.localentrega.findOne({
                where: {
                    id: solicitacao_data[i].id_local_entrega
                }
            })

            var local_coleta = await this.entities.localcoleta.findOne({
                where: {
                    id: solicitacao_data[i].id_local_coleta
                }
            })

            all_data.push(Object.assign({}, solicitacao_data[i].dataValues,
                { empresa_operacao: empresa_operacao },
                { empresa_distribuicao: empresa_distribuicao },
                { empresa_distribuicao: empresa_distribuicao },
                { veiculo: veiculo },
                { motorista: motorista },
                { cliente: cliente },
                { local_entrega: local_entrega },
                { local_coleta: local_coleta }
            ))
        }


        return all_data
    }

    getOne = async (ID) => {
        const solicitacao_data = await this.entity.findOne(
            {
                where: {
                    id: ID
                }
            }
        )
        let all_data = []

        var empresa_distribuicao = await this.entities.empresadistribuicao.findOne({
            where: {
                id: solicitacao_data.id_empresa_distribuicao
            }
        })

        var empresa_operacao = await this.entities.empresaoperacao.findOne({
            where: {
                id: solicitacao_data.id_empresa_operacao
            }
        })

        var veiculo = await this.entities.veiculo.findOne({
            where: {
                id: solicitacao_data.id_veiculo
            }
        })

        var motorista = await this.entities.motorista.findOne({
            where: {
                id: solicitacao_data.id_motorista
            }
        })

        var cliente = await this.entities.clientes.findOne({
            where: {
                id: solicitacao_data.id_cliente
            }
        })

        var local_entrega = await this.entities.localentrega.findOne({
            where: {
                id: solicitacao_data.id_local_entrega
            }
        })

        var local_coleta = await this.entities.localcoleta.findOne({
            where: {
                id: solicitacao_data.id_local_coleta
            }
        })

        all_data.push(Object.assign({}, solicitacao_data.dataValues,
            { empresa_operacao: empresa_operacao },
            { empresa_distribuicao: empresa_distribuicao },
            { empresa_distribuicao: empresa_distribuicao },
            { veiculo: veiculo },
            { motorista: motorista },
            { cliente: cliente },
            { local_entrega: local_entrega },
            { local_coleta: local_coleta }
        ))



        return all_data
    }
}