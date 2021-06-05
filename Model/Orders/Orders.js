import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"
import Product from "../Product/Product.js"

const Orders = connection.define("ORDERS", {
    status: {
        type: Sequelize.ENUM(
            'Entregue', 'Cancelado', 
            'Aceito [fila]', 'Em Preparação',
        )
    },
    number: {
        type: Sequelize.INTEGER
    }
})


const orders_product = connection.define('orders_product', {}, { timestamps: false })
Orders.belongsToMany(Product, { through: orders_product, as: 'order_id' })
Product.belongsToMany(Orders, {through: orders_product, as:'product_id'})

export default Orders