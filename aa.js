async function GetAllLukeMovies(){
    const LukeData = await axios.get('https://swapi.dev/api/people/1')
    const LukeFilms = LukeData.data.films
    const pendingFilmsPromises = []

    for(let i = 0; i < LukeFilms.length; i++){
        pendingFilmsPromises.push(axios.get(LukeFilms[i]))
    }
    console.log(pendingFilmsPromises)
    Promise.all(pendingFilmsPromises)
    .then(res => { console.log(res.length) 
        for(let i = 0; i < res.length; i++){
            let nameElement = document.createElement('h1')
            console.log(res[i].data.title)
            nameElement.textContent = res[i].data.title
            nameElement.style.color = "red";
            document.body.appendChild(nameElement)
         
        }
    })
    .catch(err => console.log(err))

}
GetAllLukeMovies()
