import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"
import Category from "../Category/Category.js"
//TODO categoria
const Product = connection.define("PRODUCT", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
    },
    url_photo: {
        type: Sequelize.TEXT,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    rate: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.TINYINT,
        allowNull: false
    }
})

Product.belongsTo(Category)
Category.hasOne(Product)

export default Product