const MasterController = require("./master-controller");

module.exports = class MotoristaControllers extends MasterController {
    constructor() {
        super('motorista')
    }


    update = async (req, res) => {
        const ID = req.params.id
      
        if(typeof req.body.motorista_empresa_associado === 'string'){
            req.body.id_empresa_distribuicao = req.body.motorista_empresa_associado
        }
        else{
            req.body.id_empresa_distribuicao = req.body.motorista_empresa_associado.id
        }
        delete req.body.motorista_empresa_associado 


         const updated = await this.repository.updateData(ID, req.body)
        if (!updated) {
            return res.status(500).json({ 'updated': false,'message': `Error updating ${this.entity} with ID ${ID}.` })
        }

        res.status(201).json({ 'updated': true,'message': `${this.entity} with ID: ${ID} updated successfully.` }) 
    }
}