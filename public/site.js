/* Make Things Work */
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

const getMenu = async ()  => {

    const url = 'api/v1/menu'

    const result = await fetch(url)
    const {Name,Description,Price,Image} = await result.json()

    const menu = document.getElementById('menuDiv')

    Name.forEach(name => {
        // const img = document.createElement('img')
        // img.src = Image

        const h3 = document.createElement('h3')
        h3.id = "menuitem"
        h3.textContent = name

        // const p = document.createElement('p')
        // p.id = "itemdetails"
        // p.textContent = Price + " | " + Description
        
        //menu.append(img,h3,p)
        menu.append(h3)
        
    });

}

getMenu()

const getEvents = async ()  => {
    const url = 'api/v1/events'

    const result = await fetch(url)
    const {Name,Location,Date,Time} = await result.json()

    const menu = document.getElementById('menuDiv')
    Name.forEach(name => {
        
    })
}

const EventButton = document.getElementById('btnEvent')

EventButton.addEventListener('click', () => {
    getEvents();
});
