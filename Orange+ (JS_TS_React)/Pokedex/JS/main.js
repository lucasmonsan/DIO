const pokemonsList = document.getElementById("pokemonsList")
const loadMorePokemons = document.getElementById("loadMorePokemons")
let limit = 20;
let offset = 0;
const max = 1500;

function typesList (types) {
  return types.map((type) => `<li>${type.type.name}</li>`)
}

function loadPokemons(limit, offset) {
  pokeApi.getPokemons(limit, offset).then((pokemons) => {
    pokemonsList.innerHTML += pokemons.map((pokemon) => `
      <li class="eachPokemon ${pokemon.types[0].type.name}">
        <div class="name_number">
          <strong>${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</strong>
          <span>#${("000" + pokemon.id).slice(-3)}</span>
        </div>
        
        <div class="types_photo">
          <ul class="types">
            ${typesList(pokemon.types).join("")}
          </ul>
          <img class="photo" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}">
        </div>
      </li>
    `).join("")
  })
  .catch((error) => console.log(error))
  .finally(() => console.log(`Requisição concluída!`))
}

loadPokemons(limit, offset)

loadMorePokemons.addEventListener("click", () => {
  offset += limit

  if ((offset + limit) < max) {
    loadPokemons(limit, offset)
  } else {
    limit = (offset+limit) - max
    loadPokemons(limit, offset)
    loadMorePokemons.parentElement.removeChild(loadMorePokemons)
  }


  // if ((offset + limit) > max) {
  //   limit = offset - max
  //   offset -= limit
  //   loadPokemons(limit, offset)
  // } else { 
  //   offset += limit
  //   loadPokemons(limit, offset)
  // }  
})