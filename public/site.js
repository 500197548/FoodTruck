
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

getMenu()

const getEvent = async id => {
	const response = await fetch(`/api/v1/events/${id}`)
	return await response.json()
}

const events = document.getElementById('eventsDiv')

const getEvents = async ()  => {

    const url = '/api/v1/events'

    const result = await fetch(url)
    const Event = await result.json()


    Event?.forEach(({Name,Date,id}) => {
        
    const div = document.createElement("div")
    div.innerHTML = `
    <h3 id = "event"><a href="events.html?id=${id}" class="active">${Name}</a></h3>
    <p id = "eventDate"> ${Date} </p>
`

    //div.onclick = () => ShowEvent(id)
    events.appendChild(div)
        
    })
}

getEvents2()




const getEventById = async (id) => {
const event = document.getElementById('eventDiv')
    const url = '/api/v1/events'

    const result = await fetch(url)
    const Event = await result.json(id)
    const {id, Name, Location, Date, Time} = getEvent(id)
    
    const div = document.createElement("div")
    div.innerHTML = `
    <h3 id = "event">${Name}</a></h3>
    <p id = "eventLoc"> ${Location} </p>
    <p id = "eventDate"> ${Date} </p>
    <p id = "eventTime"> ${Time} </p>
    `
    event.appendChild(div)
}
getEventById()