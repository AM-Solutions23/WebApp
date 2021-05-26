const validator = require('../validation/request-validation')
const solicitacao_repository = require('../repository/solicitacao-repository')

const solicitacao_repo = new solicitacao_repository()

let allowed_status = [
    'solicitado',
    'em-andamento',
    'entregue'
]

exports.newSolicitacao = async (req, res) => {

    let allowed = false
    allowed_status.forEach(status => {
        if (req.body.status == status) {
            allowed = true
        }
    });

    if (allowed == false) {
        return res.status(400).json({ 'created': false, 'message': 'Not allowed status.' })
    }

    let created = await solicitacao_repo.createNew(req.body)
    if (!created) {
        return res.status(500).json({ 'created': false, 'message': 'Error creating new Solicitacao.' })
    }

    res.status(201).json({ 'created': true, 'message': 'New Solicitacao created successfully.' })
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
    let solicitacao = await solicitacao_repo.getOne(solicitacao_id)
    let solicitacao_id = req.params.solicitacao_id
    if(solicitacao.status == allowed_status[1] || solicitacao.status == allowed_status[2]){
        return res.status(400).json({ 'updated': false, 'message': 'Not allowed status.' })
    }
    let edited = await solicitacao_repo.updateData(solicitacao_id, req.body)
    if (!edited) {
        return res.status(500).json({ 'updated': false, 'message': `Error updating Solicitacao with ID ${solicitacao_id}.` })
    }

    res.status(201).json({ 'updated': true, 'message': `Solicitacao with ID: ${solicitacao_id} updated successfully.` })
}

exports.updateStatus = async (req, res) => {
    let solicitacao_id = req.params.solicitacao_id
    let solicitacao = await solicitacao_repo.getOne(solicitacao_id)
    let edit_to = ''
    if (solicitacao.status == allowed_status[0]) {
        edit_to = allowed_status[1]
    }
    else if (solicitacao.status == allowed_status[1]) {
        edit_to = allowed_status[2]
    }
    else {
        return res.status(400).json({ 'updated': false, 'message': 'Not allowed status.' })
    }

    let edited = await solicitacao_repo.updateData(solicitacao_id, { 'status': edit_to })
    if (!edited) {
        return res.status(500).json({ 'updated': false, 'message': `Error updating Solicitacao with ID ${solicitacao_id}.` })
    }
    res.status(201).json({ 'updated': true, 'message': `Solicitacao with ID: ${solicitacao_id} updated successfully.` })
}
exports.deleteSolicitacao = async (req, res) => {
    let solicitacao_id = req.params.solicitacao_id
    let deleted = await solicitacao_repo.deleteData(solicitacao_id)
    if (!deleted) {
        return res.status(500).json({ 'message': `Error deleting Solicitacao with ID ${solicitacao_id}.` })
    }

    res.status(200).json({ 'message': `Solicitacao with ID: ${solicitacao_id} deleted successfully.` })
}

exports.getAllSolicitacoesByStatus = async (req, res) => {
    let status = req.params.status
    let solicitacoes = await solicitacao_repo.searchSolicitacaoByStatus(status)
    res.json(solicitacoes)
}
exports.estatisticasSolicitacoes = async (req, res) => {
    let estatisticas = await solicitacao_repo.estatisticasSolicitacoes()
    res.status(200).json({
        'solicitado': estatisticas[0],
        'em-andamento': estatisticas[1],
        'entregue': estatisticas[2]
    })
}