const url = `https://pokeapi.co/api/v2/pokemon/`
const pokeApi = {}

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
  .then((response) => response.json())
}

pokeApi.getPokemons = () => {
  return fetch(url)
  .then((response) => response.json())
  .then((responseJsonBody) => responseJsonBody.results)
  .then((responsePokemonsInfos) => responsePokemonsInfos.map(pokeApi.getPokemonDetails))
  .then((responseAll) => Promise.all(responseAll))
  .then((responsePokemonDetails) => responsePokemonDetails)
  .catch((error) => console.log(error))
}