// async function GetAllNicknames(){
//     const NickData = await axios.get('http://api.bryanuniversity.edu/<nickcarroll>/list')
//     const NickFilms = NickData.data.films
//     const pendingFilmsPromises = []

//     for(let i = 0; i < NickFilms.length; i++){
//         pendingFilmsPromises.push(axios.get(NickFilms[i]))
//     }

//     Promise.all(pendingFilmsPromises)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// }
// GetAllNicknames()




// async function GetAllNascarDrivers(){
//     const NascarData = await axios.get(' http(s)://api.sportradar.us/nascar-[access_level][version]/schema/statistics-v3.0.xsd?api_key=[your_api_key]')
//     const NascarFilms = NascarData.data.films
//     const pendingFilmsPromises = []

//     for(let i = 0; i < NascarFilms.length; i++){
//         pendingFilmsPromises.push(axios.get(NascarFilms[i]))
//     }

//     Promise.all(pendingFilmsPromises)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// }

// async function lukemovies(){
//     const lukemovies = await axios.get('https://swapi.dev/api/people/1')
//     console.log(lukemovies.data)
// }

// lukemovies()