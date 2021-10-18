// axios.get('https://swapi.dev/api/people/1')
// .then(res => {
//     const homeworldUrl = res.data.homeworld
//     console.log(homeworldUrl)
//     return axios.get(homeworldUrl)
// })
// .then(response => axios.get(response.data.films[0]))
// .then(res => console.log(res.data))
// .catch(err => console.log(err))

axios.get('http://cors-anywhere.herokuapp.com/http://api.sportradar.us/nascar-t3/go/2021/drivers/list.json?api_key=fqn3rxyy2fwa3fn2nbk5yq9a')
.then(res => {
    const homeworldUrl = res.data.homeworld
    console.log(homeworldUrl)
    return axios.get(homeworldUrl)
})
.then(response => axios.get(response.data.films[0]))
.then(res => console.log(res.data))
.catch(err => console.log(err))