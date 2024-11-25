const router = require('express').Router()

const { getCollection, ObjectId } = require('../../dbconnect')

// routes
router.get('/menu', async (req, res) => {
    const collection = await getCollection('FoodTruckApi', 'Menu')
    
    res.send(collection)
})

module.exports = router