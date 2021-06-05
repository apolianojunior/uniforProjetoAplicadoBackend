import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"
import Orders from "../Orders/Orders.js"
import Waiter from "../Waiter/Waiter.js"

const Table = connection.define('TABLE', {
    number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    available: {
        type: Sequelize.BOOLEAN,
    }
})

Table.belongsTo(Waiter)
Waiter.hasOne(Table)

const table_order = connection.define('table_order', {}, { timestamps: false })
Table.belongsToMany(Orders, { through: table_order, as: 'tables_id'  })
Orders.belongsToMany(Table, {through: table_order, as: 'orders_id' })

export default Table