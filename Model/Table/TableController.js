import Table from "./Table.js";
import Crud from "../Crud/CrudController.js";
import Waiter from "../Waiter/Waiter.js"
import Orders from "../Orders/Orders.js";
import Product from "../Product/Product.js";

class TableController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

    async search(req, res) {
        let id = req.params.id
        let retorno = []

        if( id ) {
            let table = await this.entity.findOne({
                where: {
                    id: id
                },
                include: [{
                    model: Orders,
                    through: 'table_order',
                    as: 'tables_id'
                }]
            }) 
            retorno = await buildTable( table )
        } else {
            let listTable = await this.entity.findAll({
                include: [{
                    model: Orders,
                    through: 'table_order',
                    as: 'tables_id'
                }]
            })

            retorno = await Promise.all( listTable.map( async table => {
                return buildTable( table )  
            }))
        } 

        res.json(retorno)

        return res
    }

}

async function buildTable( table ) {
    let { dataValues } = table
            let waiter = await Waiter.findOne({
                    where: {
                        id: dataValues.id
                    }
                })

                let order_table = await Promise.all( dataValues.tables_id.map( async order => {
                    let { dataValues } = order
                    let item = await Orders.findOne({
                        include: [{
                            model: Product,
                            through: 'orders_product',
                            as: 'order_id'
                        }],
                        where: {
                            id: dataValues.id
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

                    return {
                        id: dataValues.id,
                        number: dataValues.number,
                        status: dataValues.status,
                        items: itemsRefat
                    }
                }) ) 
                    
            return {
                id: dataValues.id,
                number: dataValues.number,
                available: dataValues.available,
                waiter: waiter.dataValues.name,
                order_table: order_table[0]
            }
}

const tableController = new TableController( Table )

export default tableController