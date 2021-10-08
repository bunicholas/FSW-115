try{
let response = axios.get('https://swapi.dev/api/people/1')
let user = axios.get(response.data.episodes[1])
.then(response => axios.get(response.data.films[1]))
.then(res => console.log(res.data))
.catch(err => console.log(err))
console.log(user)
}
catch(error){
    console.log(error)
}
let h1 = document.createElement('h1');