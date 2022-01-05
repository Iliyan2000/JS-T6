import { list } from "postcss";
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

function addtoDOM(response)
{
  var ul = document.querySelector('ul');
  response.forEach(element => {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(element));
    ul.appendChild(li);
  });
}

  let url = 'https://pokeapi.co/api/v2/pokemon';
  fetch(url).then(addtoDOM);

  //const ul = document.querySelector("ul");
});
