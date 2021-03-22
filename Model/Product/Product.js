import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"

const Product = connection.define("PRODUCT", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
    },
    picture: {
        type: Sequelize.TEXT,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// Product.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

export default Product