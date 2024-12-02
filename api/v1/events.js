const router = require('express').Router()
const { getCollection, ObjectId } = require('../../dbconnect')

// Routes
router.get('/events', async (req, res) => {
    const collection = await getCollection('FoodTruckApi', 'Events')
    
    const eventsList = await collection.find({}).toArray()
    const results = {"Events": eventsList}
    
    res.send(results)
})

router.get('/events/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getCollection('FoodTruckApi', 'Events')
    const found = await collection.findOne({ "id": parseInt(id) })
    if (found) response.send(found)
    else response.send({ error: { message: `Could not find Event with id: ${id}` }})
})

router.post('/events/add', async (request, response) => {  
    const { Name, Location, Date, Time} = request.body
    const collection = await getCollection('FoodTruckApi', 'Events')
    const events = await collection.find().toArray();

    const found = events.find(c => c.Name.toString() === Name.toString())
    const newId = events.length + 1
    if (found) response.send({ error: { message: `Menu Item: ${Name}, already exists`} })
    else collection.insertOne({Name, Location, Date, Time, id: newId}), response.send({message: {message: `Menu item added: ${Name}, ${Location}, ${Date}, ${Time}`}})

})

module.exports = router