require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./src/utils/connectDB')
const eventRouter = require('./src/routes/event')
const userRouter = require('./src/routes/user')


const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use('/events', eventRouter())
app.use('/users', userRouter())

app.get('/*', (req, res) => {
    res.send('Furula')
})


app.listen(process.env.PORT, () => {
    console.log('Servidor en marcha en el puerto 3000')
})