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
        console.log(req.token)
        const estatisticas = await this.repository.estatisticas(req.token.userID)
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
            endereco: req.body.cliente_end,
            numero_endereco: req.body.cliente_numero_end,
            complemento: req.body.cliente_complemento,
            cidade: req.body.cliente_cidade,
            estado: req.body.cliente_estado,
            numero_telefone: req.body.cliente_contato,
            documento: req.body.cliente_documento
        }
        
        const local_entrega = {
            cep: req.body.local_entrega_cep,
            nome: req.body.local_entrega_nome,
            cidade: req.body.local_entrega_cidade,
            estado: req.body.local_entrega_estado,
            endereco: req.body.local_entrega_end,
            numero_endereco: req.body.local_entrega_numero_end
        }

        const local_coleta = {
            cep: req.body.local_coleta_cep,
            nome: req.body.local_coleta_nome,
            cidade: req.body.local_coleta_cidade,
            estado: req.body.local_coleta_estado,
            endereco: req.body.local_coleta_end,
            numero_endereco: req.body.local_coleta_numero_end
        }
        const created = await this.repository.createNewSolicitacao({
            cliente_data: cliente,
            local_entrega_data: local_entrega,
            local_coleta_data: local_coleta
        },
        req.body,req.token.userID)
        
        if(!created){
            return res.status(500).json({ 'created':false,'message': `Error creating new ${this.entity}` })
        }
        res.status(201).json({ 'created':true,'message': `New ${this.entity} created successfully.` }) 
    }

    update = async(req, res) => {
        const cliente = {
            nome: req.body.cliente_nome,
            cep: req.body.cliente_cep,
            endereco: req.body.cliente_end,
            numero_endereco: req.body.cliente_numero_end,
            complemento: req.body.cliente_complemento,
            cidade: req.body.cliente_cidade,
            estado: req.body.cliente_estado,
            numero_telefone: req.body.cliente_contato,
            documento: req.body.cliente_documento
        }
        
        const local_entrega = {
            cep: req.body.local_entrega_cep,
            nome: req.body.local_entrega_nome,
            cidade: req.body.local_entrega_cidade,
            estado: req.body.local_entrega_estado,
            endereco: req.body.local_entrega_end,
            numero_endereco: req.body.local_entrega_numero_end
        }

        const local_coleta = {
            cep: req.body.local_coleta_cep,
            nome: req.body.local_coleta_nome,
            cidade: req.body.local_coleta_cidade,
            estado: req.body.local_coleta_estado,
            endereco: req.body.local_coleta_end,
            numero_endereco: req.body.local_coleta_numero_end
        }

        const solicitacao = {
            id:req.params.id,
            id_empresa_operacao: req.body.empresa_operacao,
            id_empresa_distribuicao: req.body.solicitacao_empresa,
            id_veiculo: req.body.solicitacao_veiculo,
            id_motorista: req.body.solicitacao_motorista,
            data_coleta: req.body.solicitacao_data_coleta,
            data_solicitacao: req.body.solicitacao_data_solicitacao,
            prazo_maximo_entrega: req.body.solicitacao_prazo_entrega,
            valor_nota_fiscal: req.body.solicitacao_valor_nota,
            status: req.body.solicitacao_status
        }

        const updated = await this.repository.updateSolicitacao({
            cliente_data:cliente,
            local_entrega_data: local_entrega,
            local_coleta_data: local_coleta,
            solicitacao_data: solicitacao
        })
        console.log(updated)
        if(!updated){
            return res.status(500).json({ 'updated': false,'message': `Error updating ${this.entity} with ID ${req.params.id}.` })
        }
        res.status(201).json({ 'updated': true,'message': `${this.entity} with ID: ${req.params.id} updated successfully.` })
    }

}