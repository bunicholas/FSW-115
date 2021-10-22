
const getItems = () => {
    axios.get('http://api.bryanuniversity.edu/<nickcarroll>/list')
    .then(res => {
        displayItems(res.data)
    })
    .catch(err => console.log(err))
}
getItems()

const displayItems = (items) => {
    let container = document.getElementById('content')

    items.forEach(item => {
        console.log('item: ', item)

        let card = document.createElement('div')
        let nameElement = document.createElement('h2')
        let descElement = document.createElement('h3')

        nameElement.textContent = item.name
        descElement.textContent = item.description

        //console.log('desc: ', item.description)

        card.appendChild(nameElement)
        card.appendChild(descElement)

        card.classList.add('newTodo')

        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete Me'
        deleteButton.id = item._id
        deleteButton.addEventListener('click', deleteItem)
        card.appendChild(deleteButton)

        let completeButton = document.createElement('button')
        completeButton.textContent = ''
        if(item.isComplete === true){
            completeButton.textContent = 'Mark Incomplete'
        } else {
            completeButton.textContent = 'Mark Complete'
        }
        completeButton.id = item._id
        completeButton.value = item.isComplete
        completeButton.addEventListener('click', updateItem)
        card.appendChild(completeButton)

        console.log(deleteButton)

        container.appendChild(card)
    })
}

const addItem = (e) => {
    e.preventDefault()

    let nameData = document.getElementById('name').value
    let descriptionData = document.getElementById('description').value
    let priceData = document.getElementById('price').value
    let isCompleteData = document.getElementById('todoCompletedInput').checked

    let data = {
        name: nameData,
        description: descriptionData,
        //price: priceData,
        isComplete: isCompleteData
    }

    axios.post('http://api.bryanuniversity.edu/<nickcarroll>/list', data)
    .then(res => location.reload())
    .catch(err => console.error(err))
}

let form = document.getElementById('newTodo')
form.addEventListener('submit', addItem)

const deleteItem = (e) => {
    axios.delete(`http://api.bryanuniversity.edu/<nickcarroll>/list/${e.target.id}`)
    .then(res => location.reload())
    .catch(err => console.log(err))
}

const updateItem = (e) => {

    let updateData = null
    if(e.target.value === 'true'){
        updateData = false
    } else {
        updateData = true
    }

    let data = { isComplete : updateData }

    axios.put(`http://api.bryanuniversity.edu/<nickcarroll>/list/${e.target.id}`, data)
    .then(res => location.reload(res))
    .catch(err => console.log(err))
}
const getStarWars = () => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
        displayStarWars(res.data)
    })
    .catch(err => console.log(err))
}
getStarWars()

const displayStarWars = (items) => {
    console.log(items)
    let container = document.getElementById('content')
    items.results.forEach(item => {
        let cards = document.createElement('div')
        container.appendChild(cards)
        console.log('item: ', item)
    let StarwarsElement = document.createElement('h1')
    container.appendChild(cards)
    cards.appendChild(StarwarsElement)
    StarwarsElement.textContent = item.name
    cards.classList.add('newTodo')
    let button = document.createElement('button')
    button.addEventListener('click',saveStarWars)
    button.value = item.name
    container.appendChild(button)
    })}
function saveStarWars(e){
 let data={
name:e.target.value
    }
axios.post('http://api.bryanuniversity.edu/<nickcarroll>/list/',data)
.then(res => {
    displayItems(res.data)
})
.catch(err => console.log(err))
}