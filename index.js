import express from "express"
import connection from "./Config/DBConfig/dataBaseConfig.js"
import routes from "./routes.js"
import cors from "cors"
import jwt from "jsonwebtoken"
import Waiter from "./Model/Waiter/Waiter.js"
import Product from "./Model/Product/Product.js"
import Restaurant from "./Model/Restaurant/Restaurant.js"
import Menu from "./Model/Menu/Menu.js"
import Table from "./Model/Table/Table.js"
import Customer from "./Model/Customer/Customer.js"
import Orders from "./Model/Orders/Orders.js"
import path from 'path';


const app = express()

connection.query("set FOREIGN_KEY_CHECKS=0", {raw: true})
.then( function(results) {
    connection.sync({
        //force: true
    })
})

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join("./", 'uploads')))
app.use("/", routes)

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso!")
})