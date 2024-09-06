const jwt = require('jsonwebtoken')

function auth(req, res, next){
    const token = req.headers['authorization']

    jwt.verify(token, process.env.JWT, (err, dec) => {
        if(err){
            console.log(err)
            res.status(401).send({
                message: 'Error al verificar token'
            })
            return
        }

        req.user = dec

        next()
    })
}

module.exports = auth