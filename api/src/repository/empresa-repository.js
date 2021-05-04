/**
 * Empresa is the System's user
 * login user: CNPJ
 * login password: password
*/


// ToDo: Encrypt password
// ToDo: Reset Password


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
                CNPJ: user,
                password: password
            }
        })
        if (empresa == null) {
            return false
        }
        return empresa
    }
}