import Waiter from "./Waiter.js";
import Crud from "../Crud/CrudController.js";

class WaiterController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

    async search(req, res) {
        let listWaiter = await this.entity.findAll()

        return res.json( listWaiter.map( waiter => {
            return {
                ...waiter.dataValues,
                phone_number: waiter.phoneNumber
            }
        }))
    }

    async _prepareEdit( id ) {
        let entity = await this.entity.findOne({ 
            where: { 
                id: id
            }
        })

        return {...entity.dataValues, phone_number: entity.phoneNumber}
    }

    async save(req, res) {
        try {
            let newWaiter = {
                name: req.body.name,
                login: req.body.login,
                url_photo: "http://localhost:8080/" + req.files[0].path,
                phoneNumber: req.body.phone_number,
                active: true
            }

            const novaEntity = await this.entity.create(newWaiter)
            res.status(200)
            res.json(novaEntity.dataValues)
            return res
        } catch(e) {
            console.log(e)
            return res.json({status: 402})
        }
    }

    async update(req, res) {
        let id = req.params.id
        console.log(req.files[0])
        let newWaiter = {
            id: id,
            name: req.body.name,
            login: req.body.login,
            phoneNumber: req.body.phone_number,
            active: req.body.active,
        }
        
        if( req.files[0] ) {
            newWaiter.url_photo = "http://localhost:8080/" + req.files[0].path
        }

        if(id){
            await this.entity.update(newWaiter, {
                where: {
                    id: id
                }
            })
            
            return res.json({status: 200}) 
        } else {
            
            return res.status(402) 
        }   
    }

}

const waiterController = new WaiterController( Waiter )

export default waiterController