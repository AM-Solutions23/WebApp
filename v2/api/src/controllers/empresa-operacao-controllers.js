const MasterController = require("./master-controller");

const token_handler = require('../token/token-handler')

module.exports = class EmpresaOperacaoControllers extends MasterController {
    constructor(){
        super('empresaoperacao')
    }

    login = async (req, res) => {
        const login_result = await this.repository.searchLogin(req.body.user, req.body.password)
        if (!login_result) {
            return res.status(200).json({ auth: false, 'message': 'User/Password incorrect(s).' })
        }

        const token = token_handler.createNewToken({ userID: login_result.id })

        res.status(200).json({ auth: true, token: token, user: login_result })
    }
}