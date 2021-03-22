import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"
import Product from "../Product/Product.js"
import Waiter from "../Waiter/Waiter.js"
import Customer from "../Customer/Customer.js"
import Table from "../Table/Table.js"

const Orders = connection.define("ORDERS", {
    quantity: {
        type: Sequelize.INTEGER
    }
})

Orders.belongsTo(Product)
Orders.belongsTo(Waiter)
Orders.belongsTo(Customer)
Orders.belongsTo(Table)
Product.hasOne(Customer)
Waiter.hasOne(Customer)
Customer.hasOne(Customer)
Table.hasOne(Customer)


// Orders.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

export default Orders