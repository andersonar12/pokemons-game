import pokeApi from "@/api/pokemonApi.js";

const createArrayPokemons = () => {
  // Esto es para generar un array con y cada item es undefined
  const pokemonArr = Array.from(Array(650));

  // Esto es para mapear el array con los items filleados con numeros
  return pokemonArr.map((_, index) => index + 1);
};

const getPokemonNames = async ([a, b, c, d] = []) => {
  const promiseArr = [
    pokeApi.get(`/pokemon/${a}`),
    pokeApi.get(`/pokemon/${b}`),
    pokeApi.get(`/pokemon/${c}`),
    pokeApi.get(`/pokemon/${d}`),
  ];

  const pokemons = (await Promise.all(promiseArr)).map(({ data }) => ({
    name: data.name,
    id: data.id,
  }));

  return pokemons;
};

const getPokemonOptions = () => {
  // esto es para hacer sort aleatorio de los items del array
  const mixedPokemons = createArrayPokemons().sort(() => Math.random() - 0.5);

  // Esto es para generar el array con los nombres de los pokemons de los primeros 4 items del array
  return getPokemonNames(mixedPokemons.splice(0, 4));
};

export default getPokemonOptions;
