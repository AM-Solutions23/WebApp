const { xmlToObject } = require("../tools/xml-handler");
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

    estatisticasSolicitacoes = async (req, res) => {
        const estatisticas = await this.repository.estatisticas()
        res.status(200).json(estatisticas)
    }
    xmlReader = async (req, res) => {
        console.log(req)
        /*  const xml_in_object = await xmlToObject(req.files.xml)
 
         console.log(xml_in_object) */

        res.sendStatus(200)
    }

    create = async (req, res) => {
        
        const cliente = {
            nome: req.body.cliente_nome,
            cep: req.body.cliente_cep,
            endereco: req.body.cliente_endereco,
            numero_endereco: req.body.cliente_n_endereco,
            complemento: req.body.cliente_complemento,
            cidade: req.body.cliente_cidade,
            estado: req.body.cliente_estado,
            numero_telefone: req.body.cliente_telefone,
            documento: req.body.cliente_documento
        }
        
        const local_entrega = {
            cep: req.body.local_entrega_cep,
            nome: req.body.local_entrega_nome,
            cidade: req.body.local_entrega_cidade,
            estado: req.body.local_entrega_estado,
            endereco: req.body.local_entrega_endereco,
            numero_endereco: req.body.local_entrega_n_endereco
        }

        const local_coleta = {
            cep: req.body.local_coleta_cep,
            nome: req.body.local_coleta_nome,
            cidade: req.body.local_coleta_cidade,
            estado: req.body.local_coleta_estado,
            endereco: req.body.local_coleta_endereco,
            numero_endereco: req.body.local_coleta_n_endereco
        }
        const result = await this.repository.createNewSolicitacao({
            cliente_data: cliente,
            local_entrega_data: local_entrega,
            local_coleta_data: local_coleta
        },
        req.body)
        
        res.json(result)
    }

}