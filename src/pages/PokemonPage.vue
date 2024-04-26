<template>
  <div class="pokemon-page">
    <h1>Quien es este pokemon??</h1>
    <div v-if="pokemon">
      <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showImage" />
      <PokemonOptions :pokemons="pokemonsArray" @on-selection="(e) => checkAnswer(e)" />

      <div v-if="message">
        <h2>{{ message }}</h2>
        <button @click="tryAgain">Siguiente intento</button>
      </div>
    </div>

    <h1 v-else>Espere a que cargue el pokemon...</h1>
  </div>
</template>

<script>
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import getPokemonOptions from "../functions/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonsArray: [],
      pokemon: null,
      showImage: false,
      message: "",
    };
  },
  mounted() {
    this.mixPokemonArray();
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonsArray = await getPokemonOptions();
      const randomInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonsArray[randomInt];
    },
    checkAnswer(answer) {
      this.showImage = true;
      const name = this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
      if (answer.id === this.pokemon.id) {
        this.message = `Correcto, ${name}`;
      } else {
        this.message = `Oops, era ${name}`;
      }
    },
    tryAgain() {
      this.showImage = false;
      this.pokemon = null;
      this.mixPokemonArray();
      this.message = "";
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped>
.pokemon-page {
}
</style>
