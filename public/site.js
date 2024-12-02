
const menu = document.getElementById('menuDiv')

const getMenu = async ()  => {

    const url = '/api/v1/menu'

    const result = await fetch(url)
    const Food = await result.json()

    Food?.forEach(food => {
        const img = document.createElement('img')
        img.src = food.Url

        const h3 = document.createElement('h3')
        h3.id = "menuitem"
        h3.textContent = food.Name

        const p = document.createElement('p')
        p.id = "itemdetails"
        p.textContent = food.Price + " | " + food.Description
        
        //menu.append(img,h3,p)
        menu.appendChild(h3)
        
    })}

getMenu()



// const getEvents = async ()  => {
//     const url = 'api/v1/events'

//     const result = await fetch(url)
//     const {Name,Location,Date,Time} = await result.json()

//     const menu = document.getElementById('menuDiv')
//     Name.forEach(name => {
        
//     })
// }

