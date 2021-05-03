const validator = require('../validation/request-validation')
const empresa_repo = require('../repository/empresa-repository')

const token_handler = require('../token/token-handler')

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
        res.status(400).json({'message': 'All fields must be filled.'})
        return false
    }
    
    var user = req.body.user
    var password = req.body.password
    
    var login_result = await empresa_repo.searchLogin(user,password)
    if(!login_result){
        res.status(200).json({auth:false,'message':'User/Password incorrect(s).'})
        return false
    }
    
    var token = token_handler.createNewToken(login_result.id)

    res.status(200).json({auth: true, token: token,user: login_result})
}

exports.getOne = async(req, res) => {
    var empresa_data = await empresa_repo.getOneById(req.params.empresa_id)
    res.status(200).json(empresa_data)
}

exports.newEmpresa = async(req, res) => {
    if(!validator.validate([req.body.CNPJ, req.body.nome, req.body.password])){
        res.status(400).json({'message': 'All fields must be filled.'})
    }

    var created = await empresa_repo.createNewEmpresa(req.body)
    if(!created){
        res.status(500).json({'message':'Error creating new Empresa.'})
        return false
    }

    res.status(201).json({'message':'New user created successfully.'})
}

exports.updateEmpresa = async(req, res) => {
    var empresa_id = req.params.empresa_id
    var edited = await empresa_repo.editEmpresa(empresa_id, req.body)
    if(!edited){
        res.status(500).json({'message':`Error updating Empresa with ID ${empresa_id}.`})
        return false
    }

    res.status(201).json({'message':`Empresa with ID: ${empresa_id} updated successfully.`})
}

exports.deleteEmpresa = async(req, res) => {
    var empresa_id = req.params.empresa_id
    var deleted = await empresa_repo.deleteEmpresa(empresa_id)
    if(!deleted){
        res.status(500).json({'message':`Error deleting Empresa with ID ${empresa_id}.`})
        return false
    }

    res.status(200).json({'message':`Empresa with ID: ${empresa_id} deleted successfully.`})
}

exports.getAllEmpresas = async(req, res) => {
    var empresas = await empresa_repo.getAll()
    res.status(200).json(empresas)
}
