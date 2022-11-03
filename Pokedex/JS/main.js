function typesList (types) {
  return types.map((type) => `<li>${type.type.name}</li>`)
}

function savePokemons (pokemon) {
  return `
    <li class="eachPokemon" class="normal">
      <div class="name_number">
        <strong>${pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</strong>
        <span>#${("000" + pokemon.order).slice(-3)}</span>
      </div>
      
      <div class="types_photo">
        <ul class="types">
          ${typesList(pokemon.types).join("")}
        </ul>
        <img class="photo" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png" alt="${pokemon.name}">
      </div>
    </li>
  `
}

const pokemonsList = document.getElementById("pokemonsList")

pokeApi.getPokemons().then((pokemons) => {
  pokemonsList.innerHTML += pokemons.map(savePokemons).join("")
})
.catch((error) => console.log(error))
.finally(() => console.log(`Requisição concluída!`))