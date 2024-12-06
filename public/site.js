
const menu = document.getElementById('menuDiv')

const getMenu2 = async ()  => {

    const url = '/api/v1/menu'

    const result = await fetch(url)
    const Food = await result.json()

    Food?.forEach(({Name,Description,Price,Url}) => {
        
    const div = document.createElement("div")
    div.innerHTML = `
    <img src="${Url}" alt="${Name}">
    <h3 id = "menuitem">${Name}</h3>
    <p id = "itemdetails"><strong>$ ${Price}</strong> | <strong>${Description}</strong> </p>
`

    //div.onclick = () => ShowMenuItem(id)
    menu.appendChild(div)
        
    })
}

getMenu2()

const getEvent = async id => {
	const response = await fetch(`/api/v1/events/${id}`)
	return await response.json()
}

const events = document.getElementById('eventsDiv')

const getEvents2 = async ()  => {

    const url = '/api/v1/events'

    const result = await fetch(url)
    const Event = await result.json()


    Event?.forEach(({Name,Date,id}) => {
        
    const div = document.createElement("div")
    div.innerHTML = `
    <h3 id = "event"><a href="events.html?id=${id}" class="active">${Name}</a></h3>
    <p id = "eventDate"> ${Date} </p>
`

    //div.onclick = () => ShowMenuItem(id)
    events.appendChild(div)
        
    })
}

getEvents2()




const getEvents = async (id) => {
const event = document.getElementById('eventDiv')
    const url = '/api/v1/events'

    const result = await fetch(url)
    const Event = await result.json(id)
    const {id,}
    
    const div = document.createElement("div")
    div.innerHTML = `
    <h3 id = "event">${Event.Name}</a></h3>
    <p id = "eventLoc"> ${Event.Location} </p>
    <p id = "eventDate"> ${Event.Date} </p>
    <p id = "eventTime"> ${Event.Time} </p>
    `
    event.appendChild(div)
}
getEvents()