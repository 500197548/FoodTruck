
const menu = document.getElementById('menuDiv')

const getMenu2 = async ()  => {

    const url = '/api/v1/menu'

    const result = await fetch(url)
    const Food = await result.json()
    console.log(Food)

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




// const getEvents = async ()  => {
//     const url = 'api/v1/events'

//     const result = await fetch(url)
//     const {Name,Location,Date,Time} = await result.json()

//     const menu = document.getElementById('menuDiv')
//     Name.forEach(name => {
        
//     })
// }

