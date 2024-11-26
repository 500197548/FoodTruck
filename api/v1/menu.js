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

router.post('/menu/add', async (request, response) => {
    
    const collection = await getCollection()
    const { Name, Description, Price, Url } = request.body
    console.log({  Name, Description, Price, Url  })
    const found = collection.find(p => p.Name.toString() === Name.toString())
    const newId = collection.length + 1
    if (found) response.send({ error: { message: `Menu Item: ${Name}, already exists`} })
    else recipes.push({ id: newId, Name, Description, Price, Url}), response.send({message: {message: "Menu Item Added"}})
})

module.exports = router