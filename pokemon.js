const xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/ability/1", true)
xhr.send();
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText)
        showData(data.names)
    } else if (xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText)
    }
}

function showData(data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        const character = document.createElement('h1')
        character.textContent = data[i].language.name
        document.body.appendChild(character)
}
