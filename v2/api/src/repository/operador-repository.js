const MasterRepository = require('./master-repository')

module.exports = class OperadorRepository extends MasterRepository {
    constructor() {
        super('operador')
    }

    searchLogin = async (user, password) => {
        const operador = await this.entity.findOne({
            where: {
                'email': user,
                'password': password
            }
        })

        if (operador == null) {
            return false
        }

        delete operador.dataValues.password

        return operador
    }
}