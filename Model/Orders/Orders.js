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


Orders.belongsTo(Waiter)
Orders.belongsTo(Customer, {foreignKey: {allowNull: true}})
Orders.belongsTo(Table)
Waiter.hasOne(Customer)
Customer.hasOne(Orders)
Table.hasOne(Customer)

const orders_users = connection.define('orders_users', {}, { timestamps: false })
Orders.belongsToMany(Product, { through: orders_users })
Product.belongsToMany(Orders, {through: orders_users})

export default Orders