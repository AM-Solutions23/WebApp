/**
 * Empresa is the System's user
 * login user: CNPJ
 * login password: password
*/

 
// ToDo: Encrypt password
// ToDo: Reset Password


const initModels = require('../models/init-models')
const db = require('../../database/connect')

let models = initModels(db)

/**
 * Fetchs all data from Empresa
 * @returns Multi models.Empresa
 */
exports.getAll = async() =>{
    const empresas = await models.Empresa.findAll()
    return empresas
}

/**
 * 
 * Fetchs all data from one Empresa by ID
 * @param ID
 * @returns Unique models.Empresa
 */
exports.getOneById = async(ID) => {
    const empresa = await models.Empresa.findByPk(ID)
    return empresa
}

/**
 * 
 * Create new user 
 * @param data (CNPJ, nome, password) 
 * @returns boolean
 */
exports.createNewEmpresa = async(data) => {
    let inserted = true
    try{
        await models.Empresa.create({
            CNPJ: data.CNPJ,
            nome: data.nome,
            password: data.password,
            updated_at: "0000-00-00 00:00:00"
        })
    } catch(insertError){
        inserted = false
        throw new Error('[X] Error on create a new Empresa: ' + insertError) //development mode
    }

    return inserted
}

/**
 * Update a Empresa
 * @param  empresaID 
 * @param  data 
 * @returns boolean
 */
exports.editEmpresa = async(empresaID, data) => {
    let edited = true

    try{
        await models.Empresa.update({
            CNPJ:   data.CNPJ,
            nome:   data.nome
        }, {
            where:  {
                id: empresaID
            }
        })
    }catch(updateError){
        edited = false
        throw new Error('[X] Error on edit a Empresa: ' + updateError) //development mode
    }

    return edited
}

/**
 * 
 * Delete a Empresa
 * @param empresaID 
 * @returns boolean
 */
exports.deleteEmpresa = async(empresaID) => {
    let deleted = true

    try{
        await models.Empresa.destroy({
            where: {
                id: empresaID
            }
        })
    }catch(deleteError){
        deleted = false
        throw new Error('[X] Error on delete a Empresa: ' + deleteError) //development mode
    }

    return deleted
}


/**
 * 
 * Search for credentials from Empresa
 * @param  user 
 * @param  password 
 * @returns boolean || models.Empresa 
 */
exports.searchLogin = async(user, password) => {
    const empresa = await models.Empresa.findOne({
        where: {
            CNPJ: user,
            password: password
        }
    })
    if(empresa == null){
        return false
    }
    return empresa
}