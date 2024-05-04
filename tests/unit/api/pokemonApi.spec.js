import pokeApi from "../../../src/api/pokemonApi.js";

describe("pokemonApi", () => {
  test("axios debe estar configurado con el api de pokemon", () => {
    expect(pokeApi.defaults.baseURL).toBe("https://pokeapi.co/api/v2/");
  });
});
