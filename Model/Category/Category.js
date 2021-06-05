import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"

const Categorie = connection.define("CATEGORIE", {
    description: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    }
})

export default Categorie