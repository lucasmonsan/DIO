const offset = `0`

const url = `https://pokeapi.co/api/v2/pokemon/`

fetch(url)
  .then((response) => response.json())
  .then((responseJsonBody) => console.log(responseJsonBody))
  .catch((error) => console.log(error))
  .finally(() => console.log(`Requisição concluída!`))