
const token_handler = require('../token/token-handler')

module.exports = class AuthControllers {
    validateToken = (req, res) => {
        const token = req.headers['authorization']

        if (!token) {
            return res.sendStatus(401)
        }

        let data_token = token_handler.verifyToken(token.split(' ')[1])
        if (!data_token) {
            return res.status(200).json({ auth: false })
        }

        return res.status(200).json({ auth: true })
    }
}
