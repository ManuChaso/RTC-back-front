const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('DB connected');
    } catch (error) {
        console.log('Error connecting database')
    }
}

module.exports = connectDB