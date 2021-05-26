const MasterRepository = require('./master-repository')

module.exports = class EmpresaOperacaoRepository extends MasterRepository {
    constructor() {
        super('empresaoperacao')
    }

    searchLogin = async (user, password) => {
        const empresa = await this.entity.findOne({
            where: {
                'cnpj': user,
                'password': password
            }
        })

        if (empresa == null) {
            return false
        }

        delete empresa.dataValues.password

        return empresa
    }
}