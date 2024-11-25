const router = require('express').Router()
const express = require('express')
const app = express()
const port = 3011
const { getCollection, ObjectId } = require('../secrets/dbcon.json')

// middleware
app.use(express.static('public'))
app.use(express.json())

// routes
router.get('/tests', async (req, res) => {
    const collection = await getCollection('FoodTruckApi', 'Events')
    res.send( await collection.findOne( {"Name": "Taco Tuesday"} ))
})

module.exports = router