<template>
  <section class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" @click="$emit('onSelection', pokemon)" :key="pokemon.id">{{ pokemon.name }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "PokemonOptions",
  components: {},
  props: {
    pokemons: {
      type: Array,
      required: true,
      default:  [],
    }
  },
  data() {
    return {
    };
  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
