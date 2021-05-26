const MasterController = require("./master-controller");

module.exports = class SolicitacaoControllers extends MasterController {
    constructor() {
        super('solicitacao')
    }

    update = async (req, res) => {
        const solicitacao = await this.repository.getOne(req.params.id)

        if (solicitacao.status == 'em-andamento' || solicitacao.status == 'entregue') {
            return res.status(400).json({ 'updated': false, 'message': 'Not allowed status.' })
        }
        const ID = req.params.id
        const updated = await this.repository.updateData(ID, req.body)

        if (!updated) {
            return res.status(500).json({ 'message': `Error updating ${this.entity} with ID ${ID}.` })
        }

        res.status(201).json({ 'message': `${this.entity} with ID: ${ID} updated successfully.` })
    }

    updateStatus = async (req, res) => {
        if (!(req.body.status == 'em-andamento' || req.body.status == 'entregue' || req.body.status == 'solicitado')) {
            return res.status(400).json({ 'updated': false, 'message': 'Not allowed status.' })
        }
        const ID = req.params.id
        const updated = await this.repository.updateData(ID, req.body)

        if (!updated) {
            return res.status(500).json({ 'message': `Error updating ${this.entity} with ID ${ID}.` })
        }

        res.status(201).json({ 'message': `${this.entity} with ID: ${ID} updated successfully.` })
    }
}