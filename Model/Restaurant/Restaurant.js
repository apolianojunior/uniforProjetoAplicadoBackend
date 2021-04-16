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

export default Restaurant