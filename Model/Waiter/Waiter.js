import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"

const Waiter = connection.define('WAITER', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

}) 

// Waiter.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

export default Waiter