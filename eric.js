const getItems = () => {
    axios.get('http://api.bryanuniversity.edu/ericl/list')
    .then(res => {
        displayItems(res.data)
    })
    .catch(err => console.log(err))
}
getItems()


const displayItems = (items) => {
    let container = document.getElementById('content')

    items.forEach(item => {
        console.log(item)

        let card = document.createElement('div')
        let nameElement = document.createElement('h3')
        nameElement.textContent = item.name
        card.appendChild(nameElement)
        card.classList.add('todo-card')

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete Me'
        deleteBtn.id = item._id
        deleteBtn.addEventListener('click', deleteItem)
        card.appendChild(deleteBtn)

        let completeBtn = document.createElement('button')
        completeBtn.textContent = ''
        if(item.isComplete === true){
            completeBtn.textContent = 'Mark Incomplete'
        } else {
            completeBtn.textContent = 'Mark Complete'
        }
        completeBtn.id = item._id
        completeBtn.value = item.isComplete
        completeBtn.addEventListener('click', updateItem)
        card.appendChild(completeBtn)

        console.log(deleteBtn)

        container.appendChild(card)
    })
}


const addItem = (e) => {
    e.preventDefault()

    let nameData = document.getElementById('todoTitleInput').value
    let descriptionData = document.getElementById('todoDescriptionInput').value
    let priceData = document.getElementById('todoPriceInput').value
    let isCompleteData = document.getElementById('todoCompletedInput').checked

    let data = {
        name: nameData,
        description: descriptionData,
        price: priceData,
        isComplete: isCompleteData
    }

    axios.post('http://api.bryanuniversity.edu/ericl/list', data)
    .then(res => location.reload())
    .catch(err => console.error(err))
}

let form = document.getElementById('todoForm')
form.addEventListener('submit', addItem)


const deleteItem = (e) => {
    axios.delete(`http://api.bryanuniversity.edu/ericl/list/${e.target.id}`)
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


    axios.put(`http://api.bryanuniversity.edu/ericl/list/${e.target.id}`, data)
    .then(res => location.reload())
    .catch(err => console.log(err))
}