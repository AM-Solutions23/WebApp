const initModels = require('../models/init-models')
const db = require('../../database/connect')

let models = initModels(db)


/**
 * Create a new Solicitacao
 * @param data 
 * @returns boolean
 */
exports.createNewSolicitacao = async(data) => {
    let inserted = true
    
    try{
         await models.Solicitacao.create(data)
    }catch(insertError){
        inserted = false
        throw new Error('[X] Error creating a new Solicitacao: ' + insertError) //development mode
    }

    return inserted
}

/**
 * Fetchs all data from Solicitacao
 * 
 * @returns Multo models.Solicitacao
 */
exports.allSolicitacoes = async() => {
    const solicitacoes = await models.Solicitacao.findAll()
    return solicitacoes
}

/**
 * Fetchs all data from a Solicitacao by ID
 * 
 * @param solicitacaoID 
 * @returns models.Solicitacao
 */
exports.getOneById = async(solicitacaoID) => {
    const solicitacao = await models.Solicitacao.findByPk(solicitacaoID)
    return solicitacao
}

/**
 * Update a Solicitacao
 * 
 * @param solicitacaoID 
 * @param data 
 * @returns 
 */
exports.editSolicitacao = async(solicitacaoID, data) => {
    let edited = true

    try{
        await models.Solicitacao.update(data, {
            where:  {
                id: solicitacaoID
            }
        })
    }catch(updateError){
        edited = false
        throw new Error('[X] Error editing Solicitacao: ' + updateError) //development mode
    }

    return edited
}

/**
 * Delete a Solicitacao
 * 
 * @param solicitacaoID 
 * @returns boolean
 */
exports.deleteSolicitacao = async(solicitacaoID) => {
    let deleted = true

    try{
        await models.Solicitacao.destroy({
            where: {
                id: solicitacaoID
            }
        })
    }catch(deleteError){
        deleted = false
        throw new Error('[X] Error on delete a Solicitacao: ' + deleteError) //development mode
    }

    return deleted
}