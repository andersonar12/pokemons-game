<template>
  <div class="pokemon-container">
    <img
      :src="imgSrc"
      v-if="!showPokemon"
      class="hidden-pokemon"
      alt="pokemon"
    />
    <img
      :src="imgSrc"
      v-if="showPokemon"
      class="fade-in"
      alt="pokemon"
    />
  </div>
</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    }
  },
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
  watch: {},
};
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
  display: flex;
  justify-content: center;
}

img {
  height: 200px;
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
