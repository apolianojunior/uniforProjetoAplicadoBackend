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
        try {
            const novaEntity = await this.entity.create(req.body)
            res.status(200)
            res.json(novaEntity.dataValues)
            return res
        } catch(e) {
            console.log(e)
            return res.json({status: 402})
        }
    }

    async update(req, res) {
        let id = req.body.id

        try {

            await this.entity.update(req.body, {
                where: {
                    id: id
                }
            })
            
            return res.json({status: 200}) 
        } catch(e) {
            console.log(e)
            return res.json({status: 402}) 
        }   
    }

    async remove(req, res) {
        let id = req.body.id

        try {
            await this.entity.destroy({
                where: {
                    id: id    
                }
            })

            return res.json({status: 200})
        } catch(e) {
            console.log(e)
            return res.json({status: 402})
        }
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
