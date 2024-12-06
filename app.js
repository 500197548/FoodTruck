const express = require('express')
const app = express()
const port = 3011
const { getCollection, ObjectId } = require('./dbconnect.js')

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use('/api/v1', require('./api/v1/menu.js'))
app.use('/api/v1', require('./api/v1/events.js'))
app.use(require('./api/static.js'))

// routes
app.get('/test', async (req, res) => {
    const collection = await getCollection('FoodTruckApi', 'Events')
    res.send( await collection.findOne( {"Name": "Taco Tuesday"} ))
})

app.listen(port, () => console.log(`Running at: http://localhost:${port}`))