import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { mockPokemons } from "../mocks/pokemons.mocks.js";

describe("PokemonOptions component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: mockPokemons,
      },
    });
  });

  test("debe de hacer match con el snapshot", () => {
    console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de mostrar las 5 opciones correctamente", () => {
    const liTags = wrapper.findAll("li");
    expect(liTags.length).toBe(5);

    mockPokemons.forEach((pokemon, index) => {
      expect(liTags[index].text()).toBe(pokemon.name);
    });
  });

  test("debe de emitir 'onSelection' con sus respectivos parametros al hacer click", () => {
    const [li1, li2, li3, li4, li5] = wrapper.findAll("li");

    li1.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");
    li5.trigger("click");

    console.log(wrapper.emitted("onSelection"));
    expect(wrapper.emitted("onSelection")).toHaveLength(5);

    mockPokemons.forEach((pokemon, index) => {
      expect(wrapper.emitted("onSelection")[index]).toEqual([pokemon]);
    });
  });
});
