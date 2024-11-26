const router = require('express').Router()

const { getCollection, ObjectId } = require('../../dbconnect')

// routes
router.get('/menu', async (request, response) => {
    const collection = await getCollection('FoodTruckApi', 'Menu')
    const found = await collection.find({}).toArray()
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

router.post('/add', async (request, response) => {  
    const { Name, Description, Price, Url} = request.body
    
    const collection = await getCollection('FoodTruckApi', 'Menu')
    const menu = await collection.find().toArray();
    console.log(menu)
    const found = menu.find(c => c.Name.toString() === Name.toString())
    const newId = menu.length + 1
    if (found) response.send({ error: { message: `Menu Item: ${Name}, already exists`} })
    else collection.insertOne({Name, Description, Price, Url, id: newId}), response.send({message: {message: `Event Scheduled ${Name}, ${Description}, ${Price}, ${Url}`}})
    console.log(menu)
})

module.exports = router