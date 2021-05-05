const validator = require('../validation/request-validation')

const empresa_repository = require('../repository/empresa-repository')

const token_handler = require('../token/token-handler')

const SecurePassword = require('../tools/password-encrypt')

const empresa_repo = new empresa_repository()
const secure_password = new SecurePassword()

/**
 * 
 * Login controller
 * 
 * @param req 
 * @param res 
 * @returns response 
 */
exports.login = async(req, res ) => {
    if(!validator.validate([req.body.user, req.body.password])){
        return res.status(400).json({'message': 'All fields must be filled.'})
    }
    
    let user = req.body.user
    let password = req.body.password

    let login_result = await empresa_repo.searchLogin(user,password)
    if(!login_result){
        return res.status(200).json({auth:false,'message':'User/Password incorrect(s).'})
    }
    
    let token = token_handler.createNewToken(login_result.id)

    res.status(200).json({auth: true, token: token,user: login_result})
}

exports.getOne = async(req, res) => {
    let empresa_data = await empresa_repo.getOne(req.params.empresa_id)
    res.status(200).json(empresa_data)
}

exports.newEmpresa = async(req, res) => {
    if(!validator.validate([req.body.CNPJ, req.body.nome, req.body.password])){
        res.status(400).json({'message': 'All fields must be filled.'})
    }
    
    // * Encrypt password:
    const hashed_password = secure_password.encryptPassword(req.body.password)

    req.body.password = hashed_password

    let created = await empresa_repo.createNew(req.body)
    if(!created){
        return res.status(500).json({'message':'Error creating new Empresa.'})
    }

    res.status(201).json({'message':'New user created successfully.'})
}

exports.updateEmpresa = async(req, res) => {
    let empresa_id = req.params.empresa_id
    let edited = await empresa_repo.updateData(empresa_id, req.body)
    if(!edited){
        return res.status(500).json({'message':`Error updating Empresa with ID ${empresa_id}.`})
    }

    res.status(201).json({'message':`Empresa with ID: ${empresa_id} updated successfully.`})
}

exports.deleteEmpresa = async(req, res) => {
    let empresa_id = req.params.empresa_id
    let deleted = await empresa_repo.deleteData(empresa_id)
    if(!deleted){
        return res.status(500).json({'message':`Error deleting Empresa with ID ${empresa_id}.`})
    }

    res.status(200).json({'message':`Empresa with ID: ${empresa_id} deleted successfully.`})
}


exports.getAllEmpresas = async(req, res) => {

    let empresas = await empresa_repo.getAll()
    res.status(200).json(empresas)
}
