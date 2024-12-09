const express = require('express')
const app = express()
const port = 3011
const { getCollection, ObjectId } = require('./dbconnect.js')
const path = require('path')
const root = path.join(__dirname, 'public')
const fetch = require("node-fetch")

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
    const {Name, Description, Price : priceInput, Url} = req.body
    const apiUrl = `http://localhost:${port}/api/v1/add`
    
    // Convert the price to a number if possible
    try {
        Price = parseFloat(priceInput)
    } catch { console.log('Error: Price is not a number.') }

    // Push the data to the DB
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
    const {Name, Location, Date: dateInput, Time: timeInput} = req.body
    const apiUrl = `http://localhost:${port}/api/v1/events/add`
    
    //-- Reformat Date to match our DB --//
    const DateTime = new Date(`${dateInput}T${timeInput}`)
    const month = (DateTime.getMonth() + 1).toString().padStart(2, '0')
    const day = DateTime.getDate().toString().padStart(2, '0')
    const year = DateTime.getFullYear()
    const hour = DateTime.getHours()
    const minute = DateTime.getMinutes().toString().padStart(2, '0')

    // Change hours from 24 hour time to 12 hour time
    const period = hour >= 12 ? "PM" : "AM"
    const hourReformatted = hour % 12 || 12

    // Decides how the date and time will be sent to the DB
    const dateReformatted = `${month}/${day}/${year}`
    const timeReformatted = `${hourReformatted}:${minute}${period}`

    // Push the data to the DB
    const result = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Name, Location, Date: dateReformatted, Time: timeReformatted})
    })

    res.redirect('/admin')
})

app.listen(port, () => console.log(`Running at: http://localhost:${port}`))