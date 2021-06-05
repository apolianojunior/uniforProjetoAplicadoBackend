import Orders from "./Orders.js"
import Product from "../Product/Product.js"
import Crud from "../Crud/CrudController.js"

class OrdersController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

    async search(req, res) {
        let id = req.params.id 
        let order = this._prepareEdit( id )

        let item = await Orders.findOne({
            include: [{
                model: Product,
                through: 'orders_product',
                as: 'order_id'
            }],
            where: {
                id: order.id
            }
        })
        item = item.order_id
        let itemsRefat = item.map( item => {
            return {
              id: item.dataValues.id,
              product_name: item.dataValues.name,
              quantity: item.dataValues.quantity,
              price: item.dataValues.price
            }
        })
        res.json({
            id: order.id,
            number: order.number,
            status: order.status,
            items: itemsRefat
        })

        return res
    }

}

const ordersController = new OrdersController( Orders )

export default ordersController