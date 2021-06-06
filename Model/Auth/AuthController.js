import User from "../User/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import jwtConfig from "../../Config/jwtConfig.js"

class AuthController {

    async register(req, res) {
        let hashedPassword = bcrypt.hashSync( req.body.password, 8 );

        try {
            let newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })

            let token = jwt.sign({id: newUser.id}, jwtConfig.secret, {
                expiresIn: jwtConfig.expiresIn
            }); 
            res.status(200)
            delete newUser.dataValues.password
            res.json({
                status: "sucess",
                user: newUser.dataValues,
                accessToken: token
            })

            return res
        } catch(e) {
            res.status(500)
            res.json({error: "Os campos não podem ser nulos"})

            return res
        }
    }

    async signin(req, res) {
        let { email, password } = req.body
        let user = await User.findOne({ where: { email: email }})

        if( !user ) {
            res.status(404)
            return res.json("Usuário não encontrado")
        }

        let isPasswordValid = bcrypt.compareSync( password, user.password )

        if( !isPasswordValid ) {
            res.status(401)
            return res.json("Senha inválida")
        }

        let token = jwt.sign({ id: user.id }, jwtConfig.secret, {
            expiresIn: jwtConfig.expiresIn
        })

        res.status(200)
        delete user.dataValues.password
        res.json({
            status: "sucess",
            user: user,
            accessToken: token
        })

        return res
    }
}

const authController = new AuthController()

export default authController