const { getEvents, createEvent, getEventById, deleteEvent} = require("../controllers/event")
const express = require('express')
const { getUsers, register, login } = require("../controllers/user");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

function userRouter(){
    const router = express.Router()

    router.get('/',auth, isAdmin, getUsers);
    router.post('/register', register)
    router.post('/login', login)



    return router
}

module.exports = userRouter