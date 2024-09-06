const userModel = require('../models/user');

async function isAdmin(req, res, next){
    try {
        const userData = req.user;

        const user = await userModel.findById(userData.id);

        if(user.role !== 'admin'){
            res.status(401).send({
                message: 'No autorizado'
            })
        }else{
            next()
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = isAdmin