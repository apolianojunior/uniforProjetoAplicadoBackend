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
import AuthController from "./Model/Auth/AuthController.js"
import User from "./Model/User/User.js";
import FeedbackController from "./Model/Feedback/FeedbackController.js";
import multer from "multer";
import confUpload from  "./Config/upload.js";

const JWTSecret = "23a80b45f68a47r65v231x57f"
const routes = Router()
const upload = multer(confUpload)

function auth(req, res, next) {
    const authToken = req.headers['authorization']

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

//Login - Autorization and Authentication
routes.post("/signin", AuthController.signin.bind(AuthController))
routes.post("/Users", AuthController.register.bind(AuthController))

//Waiter Controller
routes.get("/Waiters", WaiterController.search.bind(WaiterController));
routes.post("/Waiters", upload.array("img"), WaiterController.save.bind(WaiterController));
routes.put("/Waiters/:id?",upload.array("img"), WaiterController.update.bind(WaiterController));
routes.delete("/Waiters",  WaiterController.remove.bind(WaiterController));
routes.get("/Waiters/form/:id?", WaiterController.prepareForm.bind(WaiterController));

//Category Controller
routes.get("/Category", CategoryController.search.bind(CategoryController));
routes.post("/Category", CategoryController.save.bind(CategoryController));
routes.put("/Category", CategoryController.update.bind(CategoryController));
routes.delete("/Category", CategoryController.remove.bind(CategoryController));
routes.put("/Category/ativarOuDesativar/:id?", CategoryController.ativarOuDesativar.bind(CategoryController));
routes.get("/Category/form/:id?", CategoryController.prepareForm.bind(CategoryController));

//Table Controller
routes.get("/Table", TableController.search.bind(TableController));
routes.get("/Table/:id?", TableController.search.bind(TableController));
routes.post("/Table", auth, TableController.save.bind(TableController));
routes.put("/Table", auth, TableController.update.bind(TableController));
routes.delete("Table/:params?", auth, TableController.remove.bind(TableController));

//Restaurant Controller
routes.get("/Restaurant/:params?", auth, RestaurantController.search.bind(RestaurantController));
routes.post("/Restaurant", auth, RestaurantController.save.bind(RestaurantController));
routes.put("/Restaurant", auth, RestaurantController.update.bind(RestaurantController));
routes.delete("Restaurant/:params?", auth, RestaurantController.remove.bind(RestaurantController));

//Product Controller
routes.get("/Product", ProductController.search.bind(ProductController));
routes.get("/Product/form/:id?", ProductController.prepareForm.bind(ProductController));
routes.post("/Product", upload.array("img"), ProductController.save.bind(ProductController));
routes.put("/Product/:id?", upload.array("img"), ProductController.update.bind(ProductController));
routes.delete("/Product/:id?", ProductController.remove.bind(ProductController));

//Orders Controller
routes.get("/Orders/:id?", OrdersController.search.bind(OrdersController));
routes.post("/Orders", auth, OrdersController.save.bind(OrdersController));
routes.put("/Orders/:id?", OrdersController.update.bind(OrdersController));
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

//Feedback Controller
routes.get("/Feedbacks", FeedbackController.search.bind( FeedbackController ));
routes.post("/Feedbacks", FeedbackController.save.bind( FeedbackController ));
routes.put("/Feedbacks", FeedbackController.update.bind( FeedbackController ));
routes.delete("/Feedbacks", FeedbackController.remove.bind( FeedbackController ));
routes.put("/Feedbacks/ativarOuDesativar/:id?", FeedbackController.ativarOuDesativar.bind( FeedbackController ));
routes.get("/Feedbacks/form/:id?", FeedbackController.prepareForm.bind( FeedbackController ));

export default routes