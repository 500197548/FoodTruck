
const menu = document.getElementById('menuDiv')

const getMenu = async ()  => {

    const url = '/api/v1/menu'

    const result = await fetch(url)
    const Food = await result.json()

    Food?.forEach(({Name,Description,Price,Url}) => {
        
    const div = document.createElement("div")
    div.innerHTML = `
    <img id = "menuimg" src="${Url}" alt="${Name}">
    <h3 id = "menuitem">${Name}</h3>
    <p id = "itemdetails"><strong>$ ${Price}</strong> | <strong>${Description}</strong> </p>
    <hr>
`

    //div.onclick = () => ShowMenuItem(id)
    menu.appendChild(div)
        
    })
}

getMenu2()


const events = document.getElementById('eventsDiv')

const getEvents2 = async ()  => {

    const url = '/api/v1/events'

    const result = await fetch(url)
    const Event = await result.json()


    Event?.forEach(({Name,Date,}) => {
        
    const div = document.createElement("div")
    div.innerHTML = `
    <h3 id = "event">${Name}</h3>
    <p id = "eventDate"> ${Date} </p>
`

    //div.onclick = () => ShowMenuItem(id)
    events.appendChild(div)
        
    })
}

getEvents2()