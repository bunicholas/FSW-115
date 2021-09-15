const xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/docs/v2", true)
xhr.send()
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
        showData(data.results)
    } else if (xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
}

function showData(data) {
    console.log(data)
    for(let i = 0; i < data.length; i++) {
        const character = document.createElement('h1')
        character.textContent = data[i].name
        document.body.appendChild(character)
    }
}