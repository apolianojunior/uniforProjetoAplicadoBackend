import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"

const Restaurant = connection.define("RESTAURANT", {
    name: {
        type: Sequelize.STRING
    },
    CNPJ: {
        type: Sequelize.STRING
    },
    Adress: {
        type: Sequelize.STRING
    }
})

// Restaurant.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

export default Restaurant