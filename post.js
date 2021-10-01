const getItems = () => {
axios.get('http://api.bryanuniversity.edu/<nickcarroll>/list')
.then(res => {
    displayItems(res.data)
})
.catch(err => console.log(err)) 
}
getItems()
const todoForm = document.getElementById('newTodo');

todoForm.addEventListener('submit', function(event){
    event.preventDefault()
     var price = document.getElementById("price").value;
     var name = document.getElementById("name").value;
     var description = document.getElementById("description").value;
    const newTodo = {
        name: name,
        description: description,
        price: price,
    }
    axios.post('http://api.bryanuniversity.edu/<nickcarroll>/list',newTodo)
    .then(res => console.log(res))
    .catch(err => console.log(err))  
})
axios.delete('http://api.bryanuniversity.edu/<nickcarroll>/list')
.then(res => console.log(res))
.catch(err => console.log(err)) 

axios.put('http://api.bryanuniversity.edu/<nickcarroll>/list')
.then(res => console.log(res))
.catch(err => console.log(err)) 