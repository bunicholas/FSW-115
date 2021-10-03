// let todoform = document.todoform
// console.log(todoform)
// const getItems = () => {
// axios.get(`http://api.bryanuniversity.edu/<nickcarroll>/list/${event.target.id}`)
// .then(res => {
//     displayItems(res.data)
// })
// .catch(err => console.log(err)) 
// }
// getItems()
// const displayItems = (items) => {
//     console.log(items)

//     let content = document.getElementById('content')

//     for (let i = 0; i < items.length; i++) {
//         console.log(items[i].name)
//         let title = document.createElement('h3')
//         title.textContent = items[i].name
//         content.appendChild(title)
//     }

// }
// const addItem = (event) => {
//     event.preventDefault()

//  todoform.addEventListener('submit', function(event){
//     console.log('Im here')
//      event.preventDefault()
//      var price = document.getElementById("price").value;
//      var name = document.getElementById("name").value;
//      var description = document.getElementById("description").value;

//      let data = {
//         name: nameData,
//         description: descriptionData,
//         price: priceData,
//         isComplete: isCompleteData
//     }
//     }
//     let form = document.getElementById('newTodo')
// form.addEventListener('submit', addItem)

//     axios.post(`http://api.bryanuniversity.edu/<nickcarroll>/list/${event.target.id}`)
//         .then(res => {
//             console.log(res)
//         })
//      .then(res => location.reload(res))
//     .catch(err => console.log(err))  
//  })
// const deleteItem = (event) => {
// axios.delete(`http://api.bryanuniversity.edu/<nickcarroll>/list/${event.target.id}`)
// .then(res => location.reload(res))
// .catch(err => console.log(err)) 

// const updateItem = (event) => {

//     let updateData = null
//     if(event.target.value === 'true'){
//         updateData = false
//     } else {
//         updateData = true
//     }

//     let data = { isComplete : updateData

// axios.put(`http://api.bryanuniversity.edu/<nickcarroll>/list/${event.target.id}`)
// .then(res => location.reload(res))
// .catch(err => console.log(err)) 

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
        console.log(item)

        let card = document.createElement('div')
        let nameElement = document.createElement('h3')
        nameElement.textContent = item.name
        card.appendChild(nameElement)
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
        price: priceData,
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