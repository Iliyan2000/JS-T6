import { list } from "postcss";
import "../scss/app.scss";

window.addEventListener('DOMContentLoaded', addToDOM);

async function addToDOM (){
    let ul = document.querySelector('ul');
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=10';

    let res = await fetch(url);
    let data = await res.json();

    console.log(data);

    data.results.forEach(a => {
        let liElement = document.createElement('li');
        liElement.innerText = a.name;
        ul.appendChild(liElement);
    })

}
