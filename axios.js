// axios.get('http://api.bryanuniversity.edu/<nickcarroll>/list')
// .then(response => {
//     for(let i = 0; i < response.data.length; i++){
//         const h1 = document.createElement('h1')
//         h1.style.color = "red";
//         h1.textContent = response.data[i].name
//         document.body.appendChild(h1)
//     };
// })
function page1(){
    console.log('ran page 1')
axios.get('https://swapi.dev/api/people/1')
.then(response =>  {
    console.log(response.data)
    for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1')
        h1.style.color = "red";
        h1.textContent = response.data[i].name
        document.body.appendChild(h1)
    };
})
.catch()
}
var button = document.getElementById("button");
console.log(button)
button.addEventListener("click", page1);

