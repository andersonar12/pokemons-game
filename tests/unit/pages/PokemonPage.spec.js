import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { mockPokemons } from "../mocks/pokemons.mocks.js";

describe("PokemonPage Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test("debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de llamar mixPokemonArray al montar", () => {
    const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, "mixPokemonArray");
    const wrapper = shallowMount(PokemonPage);

    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  //   test("debe de hacer match con el snapshot cuando cargan los pokemons", () => {
  //     const wrapper = shallowMount(PokemonPage, {
  //       data() {
  //         return {
  //           pokemonsArr: mockPokemons,
  //           pokemon: mockPokemons[0],
  //           showPokemon: false,
  //           showAnswer: false,
  //           message: "",
  //         };
  //       },
  //     });

  //     expect(wrapper.html()).toMatchSnapshot();
  //   });

  //   test("debe de mostrar los componentes de PokemonPicture y PokemonOptions", () => {
  //     const wrapper = shallowMount(PokemonPage, {
  //       data() {
  //         return {
  //           pokemonsArray: mockPokemons,
  //           pokemon: mockPokemons[0],
  //           showPokemon: false,
  //           showAnswer: false,
  //           message: "",
  //         };
  //       },
  //     });

  //     // console.log(wrapper.html());
  //     const picture = wrapper.find("pokemon-picture-stub");
  //     const options = wrapper.find("pokemon-options-stub");

  //     expect(picture.exists()).toBeTruthy();
  //     expect(options.exists()).toBeTruthy();

  //     expect(picture.attributes("pokemonid")).toBe("1");
  //     expect(options.attributes("pokemons")).toBeTruthy();
  //   });

  test("pruebas con checkAnswer", async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArray: mockPokemons,
          pokemon: mockPokemons[0],
          showImage: false,
          message: "",
        };
      },
    });

    await wrapper.vm.checkAnswer(0);

    // console.log(wrapper.html());

    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.vm.showImage).toBe(true);
    expect(wrapper.find("h2").text()).toBe(`Correcto, ${mockPokemons[0].name}`);

    await wrapper.vm.checkAnswer(10);

    expect(wrapper.vm.message).toBe(`Oops, era ${mockPokemons[0].name}`);
  });
});
