const eventModel = require('../models/event');


async function getEvents(req, res){
    try {
        console.log(req.user)
        const events = await eventModel.find()
        res.status(200).send({
            message: 'Events',
            events
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Error getting events')
    }
}

async function getEventById(req, res){
    try {
        console.log(req.params.id)
        const  id  = req.params.id;
        const event = await eventModel.findById(id)

        if(!event){
            res.status(404).send({
                message: 'No se ha encontrado el evento'
            });
            return
        }

        res.status(200).json({
            message: 'Event',
            event
        })
    } catch (error) {
        console.log(error)
    }
}


async function createEvent(req, res){
    try {
        // const {name, description, confirmed, date, address} = req.body
        console.log(req)
        const newEvent = new eventModel(req.body)
        const eventSaved = await newEvent.save()

        res.status(201).send({
            message: 'Event created',
            event: eventSaved
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Error creating event')
    }
}

async function deleteEvent(req, res){
    try {
        const { id } = req.params;
        const event = await eventModel.findById(id)

        if(!event){
            res.status(404).send({
                message: 'El evento no existe'
            });
            return
        }

        const eventDeleted = await eventModel.findByIdAndDelete(id)

        res.status(200).send({
            message: 'Evento eliminado',
            event: eventDeleted
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getEvents,
    getEventById,
    createEvent,
    deleteEvent
}