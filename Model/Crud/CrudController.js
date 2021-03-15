class Crud {

    constructor( entity ) {
        this._entity = entity    
    }

    get entity() {
        return this._entity
    }

    async search(req, res) {
        return res.json(await this.entity.findAll())
    }

    async save(req, res) {

    }

    async update(req, res) {

    }

    async remove(req, res) {

    }
}

module.exports = Crud
