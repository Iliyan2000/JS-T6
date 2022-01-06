import { list } from "postcss";
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

function addtoDOM(response)
{
  let ul = document.querySelector('ul');
  for (let i = 0; i < 10; i++)
  {
    let li = document.createElement('li');
    li.innerText = response.results[i].name;
    ul.appendChild(li);
  }
}
function toJSON(response)
{
  return response.json();
}

  let url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  fetch(url).then(toJSON).then(addtoDOM);

  //const ul = document.querySelector("ul");
});
