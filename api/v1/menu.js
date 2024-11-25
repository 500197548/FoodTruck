const router = require('express').Router()

const { getCollection, ObjectId } = require('../../dbconnect')

// routes
router.get('/menu', async (request, response) => {
    const collection = await getCollection('FoodTruckApi', 'Menu')
    const found = await collection.find().toArray()
    const results = {"Menu": found}
    response.send(results)
})

router.get('/menu/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getCollection('FoodTruckApi', 'Menu')
    const found = await collection.findOne({ "id": parseInt(id) })
    if (found) response.send(found)
    else response.send({ error: { message: `Could not find Menu Item with id: ${id}` }})
})

module.exports = router