import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"
import Waiter from "../Waiter/Waiter.js"

const Table = connection.define('TABLE', {
    number: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Table.belongsTo(Waiter)
Waiter.hasOne(Table)

// Table.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

export default Table