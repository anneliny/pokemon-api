

function getData(){
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
const api = (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
fetch(api)
  .then((response) => {

    if (!response.ok) {
      throw new Error("NETWORK RESPONSE ERROR");
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
    
    document.getElementById("pokemonImage").src = data.sprites.front_default;
  })
  .catch(error => console.error(error));
}
