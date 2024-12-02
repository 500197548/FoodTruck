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

const router = require('../api/v1/menu')
const Get = router.get()


const getMenu = async ()  => {


    const url = 'api/v1/menu'

    const result = await fetch(url)
    const Food = await result.json()

    const menu = document.getElementById('menuDiv')

    Food.forEach(food => {
        const img = document.createElement('img')
        img.src = food.Url

        const h3 = document.createElement('h3')
        h3.id = "menuitem"
        h3.textContent = food.Name

        const p = document.createElement('p')
        p.id = "itemdetails"
        p.textContent = food.Price + " | " + food.Description
        
        menu.append(img,h3,p)
        //menu.append(h3)
        
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

