const router = require('express').Router()
const { getCollection, ObjectId } = require('../../dbconnect')

// Routes
router.get('/events', async (req, res) => {
    const collection = await getCollection('FoodTruckApi', 'Events')
    
    const eventsList = await collection.find({}).toArray()
    const results = {"Events": eventsList}
    
    res.send(results)
})

module.exports = router