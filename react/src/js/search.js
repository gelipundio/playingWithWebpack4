async function search(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  const pokemon = await response.json()
  return pokemon
}

export default search
