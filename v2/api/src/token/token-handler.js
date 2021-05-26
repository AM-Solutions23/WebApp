require('dotenv/config')
const jwt = require('jsonwebtoken')

/**
 * 
 * Create a token to user
 * 
 * @param payload 
 * @returns jwt_token
 */
exports.createNewToken = (payload) => {
    let doc = {
        userID: payload.userID,
        empresaID:payload.empresaID
    }
    const token = jwt.sign(doc, process.env.SECRET_KEY , {expiresIn: "10h"})
    return token
}

/**
 * 
 * Authenticates token
 * @param token 
 * @returns boolean || jwt_token_data
 */
exports.verifyToken = (token) => {
    let verifier = jwt.verify(token,process.env.SECRET_KEY, (err, decoded_data) =>{
        if(err){
            return false
        }
        return decoded_data
    })

    return verifier
}