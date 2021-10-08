axios.get('https://swapi.dev/api/people/1')
.then(res => {
    const homeworldUrl = res.data.homeworld
    console.log(homeworldUrl)
    return axios.get(homeworldUrl)
})
.then(response => axios.get(response.data.films[0]))
.then(res => console.log(res.data))
.catch(err => console.log(err))