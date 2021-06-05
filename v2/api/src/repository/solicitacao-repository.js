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
        return {
            solicitados, em_andamento, n_solicitacoes_concluido, n_solicitacoes_em_andamento, n_solicitacoes_solicitadas
        }
    }

    updateData = async (ID, data) => {
        let edited = true
        if (data.status == 'entregue') {
            data.data_entrega = new Date().toISOString()
        }

        try {
            await this.entity.update(data, {
                where: {
                    id: ID
                }
            })
        } catch (updateError) {
            edited = false
            throw new Error(`[X] Error on edit a ${this.entity_type}: ${updateError}`) //development mode
        }

        return edited

    }

    getAll = async (token) => {
        const solicitacao_data = await this.entity.findAll(
            {
                where: {
                    id_empresa_operacao: token,
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

            all_data.push(Object.assign({}, solicitacao_data[i].dataValues,
                { empresa_distribuicao: empresa_distribuicao },
                { veiculo: veiculo },
                { motorista: motorista },
            ))
        }


        return all_data
    }


    getOne = async (ID) => {
        let solicitacao_data = {}
        try {
            solicitacao_data = await this.entity.findOne(
                {
                    where: {
                        id: ID
                    }
                }
            )
        }
        catch (fetch_error) {
            return {}
        }
        if (solicitacao_data == null)
            return {}
        let all_data = []

        var empresa_distribuicao = await this.entities.empresadistribuicao.findOne({
            where: {
                id: solicitacao_data.id_empresa_distribuicao
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



        all_data.push(Object.assign({}, solicitacao_data.dataValues,
            { empresa_distribuicao: empresa_distribuicao },
            { veiculo: veiculo },
            { motorista: motorista },
        ))



        return all_data
    }


    getByStatus = async (token, status) => {
        const solicitacao_data = await this.entity.findAll(
            {
                where: {
                    id_empresa_operacao: token,
                    status: status
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



            all_data.push(Object.assign({}, solicitacao_data[i].dataValues,
                { empresa_distribuicao: empresa_distribuicao },
                { veiculo: veiculo },
                { motorista: motorista },
            ))
        }


        return all_data
    }
}