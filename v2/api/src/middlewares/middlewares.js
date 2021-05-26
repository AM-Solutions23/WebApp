const token_handler = require('../token/token-handler')

/**
 * Verifies request's token veracity
 * @param req 
 * @param res 
 * @param next 
 * @returns next
 */
exports.authUser = (req, res, next) => {
    let token = req.headers['authorization']
    if (!token) {
        // If token was not provided
        return res.sendStatus(401)
    }
    let data_token = token_handler.verifyToken(token.split(' ')[1])
    if (!data_token) {
        return res.sendStatus(403)
    }
    req.token = data_token
    next()
}

/**
 * Verifies if the request's body is not empty
 * @param req 
 * @param res 
 * @param next 
 * @returns next
 */
exports.validateRequestBody = (req, res, next) => {
    if (req.body.constructor == Object && Object.keys(req.body).length == 0) {
        return res.status(406).json({ 'message': 'This request needs a body. Nothing to proccess.' })
    }
    next()
}