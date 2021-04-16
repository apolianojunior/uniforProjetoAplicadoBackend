import { Router } from "express"
import jwt from "jsonwebtoken"
import CustomerController from "./Model/Customer/CustomerController.js";
import MenuController from "./Model/Menu/MenuController.js";
import OrdersController from "./Model/Orders/OrdersController.js";
import ProductController from "./Model/Product/ProductController.js";
import RestaurantController from "./Model/Restaurant/RestaurantController.js";
import TableController from "./Model/Table/TableController.js";
import WaiterController from "./Model/Waiter/WaiterController.js";
import CategoryController from "./Model/Category/CategoryController.js";
import User from "./Model/User/User.js"
import multer from "multer"
import confUpload from  "./Config/upload.js"

const JWTSecret = "23a80b45f68a47r65v231x57f"
const routes = Router()
const upload = multer(confUpload)

function auth(req, res, next) {
    console.log(req)
    const authToken = req.headers['authorization']
    console.log(authToken)
    if(authToken != undefined) {
        const bearer = authToken.split(' ')
        const token = bearer[1]
        console.log(token)
        jwt.verify(token, JWTSecret, (err, data) => {
            if(err) {
                res.status(401);
                res.json({err: "tolken inválido"})
            } else {
                req.token = token
                req.user = {id: data.id, email: data.email}

                next()
            }
        })

    } else {
        res.status(401)
        res.json({err: "Token inválido! "});
    }
}

//USER
routes.post("/login", async (req, res) => {
    let {email, password} = req.body

    if( email == undefined ) {
        res.status(400)
        res.json({ err: "Email inválido"})
    } else {
        const user = await User.findAll({ where: { email: email }})

        if(user.length == 0) {
            res.status(404)
            res.json("Usuário não encontrado")
        } else {
            if( user[0].password == password) {
                jwt.sign({ id: user[0].id, email: user[0].email}, JWTSecret, {expiresIn: '12h'}, (err, token) => {
                    if (err) {
                        res.status(400)
                        res.json({err: "Falha Interna"})
                    } else {
                        console.log(token)
                        res.status(200)
                        res.json({
                            status: "sucess",
                            user: {
                                id: user[0].id,
                                nome: user[0].nome,
                                email: user[0].email,
                                createdAt: user[0].createdAt,
                                updatedAt: user[0].updatedAt
                            } ,
                            accessToken: token
                        })
                    }
                })
            } else {
                res.status(404)
                res.json("Senha inválida")
            }
        }
    }
})


//Waiter Controller
routes.get("/Waiter", auth, WaiterController.search.bind(WaiterController));
routes.post("/Waiter", auth, WaiterController.save.bind(WaiterController));
routes.put("/Waiter", auth, WaiterController.update.bind(WaiterController));
routes.delete("/Waiter", auth,  WaiterController.remove.bind(WaiterController));
routes.get("/Waiter/form/:id?", auth, WaiterController.prepareForm.bind(WaiterController));

//Category Controller
routes.get("/Category", CategoryController.search.bind(CategoryController));
routes.post("/Category", CategoryController.save.bind(CategoryController));
routes.put("/Category", CategoryController.update.bind(CategoryController));
routes.delete("/Category", CategoryController.remove.bind(CategoryController));
routes.get("/Category/form/:id?", CategoryController.prepareForm.bind(CategoryController));

//Table Controller
routes.get("/Table/:params?", auth, TableController.search.bind(TableController));
routes.post("/Table", auth, TableController.save.bind(TableController));
routes.put("/Table", auth, TableController.update.bind(TableController));
routes.delete("Table/:params?", auth, TableController.remove.bind(TableController));

//Restaurant Controller
routes.get("/Restaurant/:params?", auth, RestaurantController.search.bind(RestaurantController));
routes.post("/Restaurant", auth, RestaurantController.save.bind(RestaurantController));
routes.put("/Restaurant", auth, RestaurantController.update.bind(RestaurantController));
routes.delete("Restaurant/:params?", auth, RestaurantController.remove.bind(RestaurantController));

//Product Controller
routes.get("/Product/:params?", ProductController.search.bind(ProductController));
routes.post("/Product", upload.array("img"), ProductController.save.bind(ProductController));
routes.put("/Product", ProductController.update.bind(ProductController));
routes.delete("Product/:params?", ProductController.remove.bind(ProductController));

//Orders Controller
routes.get("/Orders/:params?", auth, OrdersController.search.bind(OrdersController));
routes.post("/Orders", auth, OrdersController.save.bind(OrdersController));
routes.put("/Orders", auth, OrdersController.update.bind(OrdersController));
routes.delete("Orders/:params?", auth, OrdersController.remove.bind(OrdersController));

//Menu Controller
routes.get("/Menu/:params?", auth, MenuController.search.bind(MenuController));
routes.post("/Menu", auth, MenuController.save.bind(MenuController));
routes.put("/Menu", auth, MenuController.update.bind(MenuController));
routes.delete("Menu/:params?", auth, MenuController.remove.bind(MenuController));

//Costumer Controller
routes.get("/Costumer/:params?", auth, CustomerController.search.bind(CustomerController));
routes.post("/Costumer", auth, CustomerController.save.bind(CustomerController));
routes.put("/Costumer", auth, CustomerController.update.bind(CustomerController));
routes.delete("Costumer/:params?", auth, CustomerController.remove.bind(CustomerController));

export default routes