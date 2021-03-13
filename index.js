const express = require("express")
const connection = require("./Config/dataBaseConfig")
const customerController = require("./Model/Customer/CustomerController")
const menuController = require("./Model/Menu/MenuController")
const ordersController = require("./Model/Orders/OrdersController")
const productController = require("./Model/Product/ProductController")
const restaurantController = require("./Model/Restaurant/RestaurantController")
const tableController = require("./Model/Table/TableController")
const waiterController = require("./Model/Waiter/WaiterController")

let promise = connection.query("set FOREIGN_KEY_CHECKS=0")
const Waiter = require("./Model/Waiter/Waiter")
const Customer = require("./Model/Customer/Customer")
const Menu = require("./Model/Menu/Menu")
const Orders = require("./Model/Orders/Orders")
const Product = require("./Model/Product/Product")
const Restaurant = require("./Model/Restaurant/Restaurant")
const Table = require("./Model/Table/Table")

const app = express()
app.use(express.json())

connection.authenticate().then( () => {
    console.log("Banco Ok!")
}). catch( (msgError) => {
    console.log(msgError)
})

app.use("/", customerController)
app.use("/", menuController)
app.use("/", ordersController)
app.use("/", productController)
app.use("/", restaurantController)
app.use("/", tableController)
app.use("/", waiterController)



app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso!")
})