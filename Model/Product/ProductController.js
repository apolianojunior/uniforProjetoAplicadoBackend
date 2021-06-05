import Product from "./Product.js";
import Crud from "../Crud/CrudController.js";

class ProductController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }
    
    async save(req, res) {

        let novoProduto = {
            name: req.body.name,
            description: req.body.description,
            CATEGORIEId: req.body.category_id,
            price: parseFloat(req.body.price),
            rate: Number(req.body.rate),
            status: true,
            available: true,
            url_photo: "http://localhost:8080/" + req.files[0].path
        } 
 
        try {
            let newEntity = await this.entity.create( novoProduto )
            res.status(200)
            res.json({...newEntity.dataValues})
            return res
        } catch(e) {
            console.log(e)
            res.status(402)
            res.json({err: "erro"})
            return res
        }
    }

    async update(req, res) {
        let id = req.params.id

        let newProduct = {
            name: req.body.name,
            description: req.body.description,
            CATEGORIEId: req.body.category_id,
            price: req.body.price,
            rate: req.body.rate,
            status: true,
            available: req.body.available
        } 

        if( req.files[0] ) {
            newProduct.url_photo = "http://localhost:8080/" + req.files[0].path
        }

        try {

            await this.entity.update(newProduct, {
                where: {
                    id: id
                }
            })
            
            return res.json({status: 200}) 
        } catch(e) {
            console.log(e)
            return res.json({status: 402}) 
        }   
    }
}

const productController = new ProductController( Product )

export default productController