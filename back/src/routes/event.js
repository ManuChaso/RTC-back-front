const { getEvents, createEvent, getEventById, deleteEvent} = require("../controllers/event")
const express = require('express')
const auth = require("../middlewares/auth")

function eventRouter(){
    const router = express.Router()

    router.get('/', auth, getEvents)
    router.get('/get-event/:id', getEventById)
    router.post('/create-event/', createEvent)
    router.delete('/delete-event/:id', deleteEvent)


    return router
}

module.exports = eventRouter