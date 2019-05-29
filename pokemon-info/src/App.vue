<template>
  <div id="app">
    <img src="./assets/poke-logo.png">
    <h1>{{ title }}</h1>
    <p>This app it's just a lesson to learn Vue.js components, Axios GETs and Computed data.</p>
    <small>The API used it's: <a href="https://pokeapi.co/" target="_blank">https://pokeapi.co/</a></small>
    <Pokemons />
    <br>
    <hr>
    <p>{{ footerText }}</p>
  </div>
</template>

<script>
import Pokemons from './Pokemons'

export default {
  name: 'app',
  components: {
    Pokemons
  },
  data () {
    return {
      title: '1st generation Pokémon list app',
      footerText: 'Matheus Vieira - 2019'
    }
  }
}
</script>

<style>
body{
  background-color: #f9f9f9;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d2c5e;
  width: 100%;
  max-width: 800px;
  margin: 1rem auto;
  background-color: #fff;
  padding: 3rem 1rem;
  box-sizing: border-box;
  border-radius: 10px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color:#b94242;
}

hr{
  border: 0;
  border-bottom: 1px solid #1d2c5e;
}
</style>
