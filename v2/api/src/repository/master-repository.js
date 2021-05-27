const db = require('../models/index')



module.exports = class MasterRepository {
    constructor(entity) {
        this.entities = {
            carga: db.Carga,
            clientes: db.Clientes,
            configuracao: db.Configuracao,
            empresadistribuicao: db.EmpresaDistribuicao,
            empresaoperacao: db.EmpresaOperacao,
            localcoleta: db.LocalColeta,
            localentrega: db.LocalEntrega,
            motorista: db.Motorista,
            operador: db.Operador,
            solicitacao: db.Solicitacao,
            veiculo: db.Veiculo
        }
        this.entity = this.entities[entity]
        this.entity_type = entity
    }
    getAll = async () => {
        const fetched_data = await this.entity.findAll()
        return fetched_data
    }

    getOne = async (ID) => {
        const fetched_data = await this.entity.findByPk(ID)
        if (fetched_data == null) {
            return {}
        }
        return fetched_data
    }

    createNew = async (data) => {
        let inserted = true
        try {
            await this.entity.create(data)
        } catch (insertError) {
            inserted = false
            throw new Error(`[X] Error on create a new ${this.entity_type}: ${insertError}`) //development mode
        }

        return inserted
    }

    updateData = async (ID, data) => {
        let edited = true

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

    deleteData = async (ID) => {
        let deleted = true

        try {
            await this.entity.destroy({
                where: {
                    id: ID
                }
            })
        } catch (deleteError) {
            deleted = false
            throw new Error(`[X] Error on delete a ${this.entity_type}: ${deleteError}`) //development mode
        }

        return deleted
    }
}