class Crud {

    constructor( entity ) {
        this._entity = entity    
    }

    get entity() {
        return this._entity
    }

    async search(req, res) {
        console.log(req.query)
        return res.json(await this.entity.findAll({where: req.body}))
    }

    async save(req, res) {

    }

    async update(req, res) {

    }

    async remove(req, res) {

    }

    async prepareForm(req, res) {
        
        let jsonRetorno
        let id = req.params.id 
        if( id ) {
            jsonRetorno = await this._prepareEdit( id )
        } else {
            jsonRetorno = this._prepareNew
        }

        return res.json(jsonRetorno)
    }

    async _prepareNew() {
        return await new this.entity()
    }

    async _prepareEdit( id ) {
        return await this.entity.findAll({ where: { id: id}})
    }
}

export default Crud
