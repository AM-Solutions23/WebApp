/**
 * Empresa is the System's user
 * login user: CNPJ
 * login password: password
*/

// ToDo: Reset Password


const SecurePassword = require('../tools/password-encrypt')
const MasterRepository = require('./master-repository')

module.exports = class EmpresaRepository extends MasterRepository {
    constructor() {
        super('empresa')
    }

    /**
     * 
     * Search for credentials from Empresa
     * @param  user 
     * @param  password 
     * @returns boolean || models.Empresa 
     */
    searchLogin = async (user, password) => {
        const empresa = await this.entity.findOne({
            where: {
                CNPJ: user
            }
        })

        if (empresa == null) {
            return false
        }
        
        const secure_password = new SecurePassword()
        if(!secure_password.verifyEncryptedPassword(password, empresa.password)){
            return false
        }
        
        delete empresa.dataValues.password

        return empresa
    }
}