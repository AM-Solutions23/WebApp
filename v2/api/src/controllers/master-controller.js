const InitRepositories = require('../repository/init')

module.exports = class MasterController {
    constructor(entity) {
        this.repository = InitRepositories[entity]
        this.entity = entity
    }

    create = async (req, res) => {
        let created = await this.repository.createNew(req.body)
        if (!created) {
            return res.status(500).json({ 'created':false,'message': `Error creating new ${this.entity}` })
        }
        res.status(201).json({ 'created':true,'message': `New ${this.entity} created successfully.` })
    }

    readAll = async (req, res) => {
        const all_data = await this.repository.getAll()
        res.status(200).json(all_data)
    }

    readOne = async (req, res) => {
        const one_data = await this.repository.getOne(req.params.id)
        res.status(200).json(one_data)
    }

    update = async (req, res) => {
        const ID = req.params.id
        const updated = await this.repository.updateData(ID, req.body)

        if (!updated) {
            return res.status(500).json({ 'updated': false,'message': `Error updating ${this.entity} with ID ${ID}.` })
        }

        res.status(201).json({ 'updated': true,'message': `${this.entity} with ID: ${ID} updated successfully.` })
    }

    delete = async (req, res) => {
        const ID = req.params.id
        const deleted = this.repository.deleteData(ID)

        if (!deleted) {
            return res.status(500).json({ 'deleted':false,'message': `Error deleting ${this.entity} with ID ${ID}.` })
        }

        res.status(201).json({ 'deleted':true,'message': `${this.entity} with ID: ${ID} deleted successfully.` })
    }
}