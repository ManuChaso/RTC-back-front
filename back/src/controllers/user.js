const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const getUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).send({
            message: 'users',
            users
        })
    } catch (error) {
        console.log(error)
    }
}
const register = async (req, res) =>{
    try {
        const {name, email, password} = req.body;

        const newUser = new userModel({name, email, password})

        newUser.role = 'user';
        console.log(password)
        bcrypt.hash(password, 10, async (err, hash) => {
            console.log(hash)
            if(err){
                console.log(err)
                return
            }
            
            newUser.password = hash
            await newUser.save()

            res.status(201).send({
                message: 'Usuario registrado'
            })
        })
    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) => {
    try {
        console.log(req.body)
        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            res.status(404).send({
                message: 'El email no está registrado'
            });
            return
        }

        console.log(password, user.password)
        bcrypt.compare(password, user.password, (err, match) => {
            if(err){
                res.status(500).send({
                    message: 'Error al iniciar sesion'
                });
                console.log(err)
                return
            }

            if(!match){
                res.status(500).send({
                    message: 'Email o contraseña incorrectas'
                });
                return
            }else{
                const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT, {expiresIn: '30d'})

                res.status(200).send({
                    message: 'Logeado',
                    token
                })
            }

        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getUsers,
    register,
    login
}