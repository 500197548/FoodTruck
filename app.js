const express = require('express')
const app = express()
const port = 3011
const { getCollection, ObjectId } = require('./dbconnect.js')
const path = require('path')
const root = path.join(__dirname, 'public')

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1', require('./api/v1/menu.js'))
app.use('/api/v1', require('./api/v1/events.js'))
app.use(require('./api/static.js'))

// routes
app.get('/test', async (req, res) => {
    const collection = await getCollection('FoodTruckApi', 'Events')
    res.send( await collection.findOne( {"Name": "Taco Tuesday"} ))
})

app.get('/admin', (req, res) => {
    res.sendFile('add_form.html', { root })
})

app.post('/admin/addMenuItem', async (req, res) => {
    const {Name, Description, Price, Url} = req.body
    const apiUrl = `http://localhost:${port}/api/v1/add`
    
    const result = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Name, Description, Price, Url})
    })

    res.redirect('/admin')
})

app.post('/admin/addEvent', async (req, res) => {
    const {Name, Location, Date, Time} = req.body
    const apiUrl = `http://localhost:${port}/api/v1/events/add`
    
    const result = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Name, Location, Date, Time})
    })

    res.redirect('/admin')
})

app.listen(port, () => console.log(`Running at: http://localhost:${port}`))