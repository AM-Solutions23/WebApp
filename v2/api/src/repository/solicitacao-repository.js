const MasterRepository = require('./master-repository')


module.exports = class SolicitacaoRepository extends MasterRepository {
    constructor() {
        super('solicitacao')
    }

     estatisticas = async (token) => {
        const solicitados = await this.entity.findAll({
            where: {
                'status': 'solicitado',
                id_empresa_operacao: token
            },
            limit: 6
        })

        const em_andamento = await this.entity.findAll({
            where: {
                'status': 'em-andamento',
                id_empresa_operacao: token
            },
            limit: 6
        })

        return {
            solicitados, em_andamento
        }
    } 


    createNewSolicitacao = async (data, request_data, token) => {
        let new_cliente = {}
        let new_local_entrega = {}
        let new_local_coleta = {}

        console.log(data)
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
            id_empresa_operacao: token,
            id_empresa_distribuicao: request_data.solicitacao_empresa,
            id_veiculo: request_data.solicitacao_veiculo,
            id_motorista: request_data.solicitacao_motorista,
            id_cliente: new_cliente.id,
            id_local_coleta: new_local_coleta.id,
            id_local_entrega: new_local_entrega.id,
            data_coleta: request_data.solicitacao_data_coleta,
            data_solicitacao: new Date().toISOString(),
            prazo_maximo_entrega: request_data.solicitacao_prazo_entrega,
            valor_nota_fiscal: request_data.solicitacao_valor_nota,
            status: request_data.solicitacao_status
        }

        console.log(solicitacao)
        let new_solicitacao = {}
        try {

            new_solicitacao = await this.entities.solicitacao.create(solicitacao)
        } catch (insert_solicitacao_error) {
            return false
        }
        return true
    }

    updateSolicitacao = async (data) => {
        const solicitacao = await this.getOne(data.solicitacao_data.id)
        if(data.solicitacao_data.status ==  'entregue'){
            data.solicitacao_data.data_entrega = new Date().toISOString()
        }

         try {
            await this.entities.clientes.update(data.cliente_data, {
                where: {
                    id: solicitacao[0].id_cliente
                }
            })
        } catch (update_cliente_error) {
            console.log(update_cliente_error)
            return false
        }

        try {
            await this.entities.localentrega.update(data.local_entrega_data, {
                where: {
                    id: solicitacao[0].id_local_entrega
                }
            })
        } catch (update_local_entrega_error) {
            return false
        }

        try {
            await this.entities.localcoleta.update(data.local_coleta_data, {
                where: {
                    id: solicitacao[0].id_local_coleta
                }
            })
        } catch (update_local_coleta_error) {
            return false
        }

        try {
            await this.entity.update(data.solicitacao_data, {
                where: {
                    id: solicitacao[0].id
                }
            })
        } catch (update_solicitacao_error) {
            return false
        } 
        return true
    }

    getAll = async (token) => {
        const solicitacao_data = await this.entity.findAll(
            {
                where: {
                    id_empresa_operacao:token
                }
            }
        )
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