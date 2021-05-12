const validator = require('../validation/request-validation')
const solicitacao_repository = require('../repository/solicitacao-repository')

const solicitacao_repo = new solicitacao_repository()

exports.newSolicitacao = async (req, res) => {
    let fields = [
        req.body.data_solicitacao,
        req.body.data_coleta,
        req.body.local_entrega,
        req.body.data_entrega_prevista,
        req.body.local_coleta,
        req.body.status,
        req.body.nome_motorista,
        req.body.tipo_de_caminhao,
        req.body.valor_nota_fiscal,
        req.body.categoria_da_carga,
        req.body.descricao_da_carga,
        req.body.nome_destinatario,
        req.body.endereco_destinatario,
        req.body.numero_endereco_destinatario,
        req.body.complemento_destinatario,
        req.body.CEP_destinatario,
        req.body.cidade_destinatario,
        req.body.estado_destinatario,
        req.body.nome_remetente,
        req.body.CNPJ_remetente,
        req.body.inscricao_estadual_remetente
    ]
    
    let allowed_status = [
        'solicitado',
        'em-andamento',
        'entregue'
    ]

    let allowed = false
    allowed_status.forEach(status => {
        if(req.body.status == status){
            allowed = true
        }
    });

    if(allowed == false){
        return res.status(400).json({ 'created': false,'message': 'Not allowed status.' })
    }

    if (!validator.validate(fields)) {
        return res.status(400).json({ 'created': false,'message': 'All fields must be filled.' })
    }

    let created = await solicitacao_repo.createNew(req.body)
    if (!created) {
        return res.status(500).json({ 'created': false,'message': 'Error creating new Solicitacao.' })
    }

    res.status(201).json({ 'created': true,'message': 'New Solicitacao created successfully.' })
}

exports.getAllSolicitacoes = async (req, res) => {
    let solicitacoes = await solicitacao_repo.getAll()
    res.status(200).json(solicitacoes)
}

exports.getOneSolicitacao = async (req, res) => {
    let solicitacao = await solicitacao_repo.getOne(req.params.solicitacao_id)
    res.status(200).json(solicitacao)
}

exports.updateSolicitacao = async (req, res) => {

    let solicitacao_id = req.params.solicitacao_id
    let edited = await solicitacao_repo.updateData(solicitacao_id, req.body)
    if (!edited) {
        return res.status(500).json({ 'updated': false,'message': `Error updating Solicitacao with ID ${solicitacao_id}.` })
    }

    res.status(201).json({ 'updated': true,'message': `Solicitacao with ID: ${solicitacao_id} updated successfully.` })
}

exports.deleteSolicitacao = async(req, res) => {
    let solicitacao_id = req.params.solicitacao_id
    let deleted = await solicitacao_repo.deleteData(solicitacao_id)
    if(!deleted){
        return res.status(500).json({'message':`Error deleting Solicitacao with ID ${solicitacao_id}.`})
    }

    res.status(200).json({'message':`Solicitacao with ID: ${solicitacao_id} deleted successfully.`})
}

exports.getAllSolicitacoesByStatus = async (req, res) => {
    let status = req.params.status
    let solicitacoes = await solicitacao_repo.searchSolicitacaoByStatus(status)
    res.json(solicitacoes)
}