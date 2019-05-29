<template>
  <div class="pokemons">
    <div v-if="pokemons.length > 0">
      <div class="search-form">
        <label for="search">PokéSearch: </label>
        <input type="text" name="search" v-model="pokeSearch" placeholder="Enter Pokémon name...">
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Pokémon name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pokemon in filteredPokemon" :key="pokemon.id">
            <td>{{ pokemon.id }}</td>
            <td>{{ pokemon.name }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>#</th>
            <th>Pokémon name</th>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="empty-msg" v-else>
      <p>Nothing found...</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Pokemons',
  data() {
    return {
      pokemons: [],
      pokeSearch: ''
    }
  },
  computed: {
    filteredPokemon() {
      return this.pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().match(this.pokeSearch.toLowerCase())
      })
    }
  },
  created() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => {
      this.pokemons = response.data.results
      this.pokemons = this.pokemons.map((pokemon, index) => {
        pokemon['id'] = index + 1
        return pokemon
      })
    })
  }
}
</script>

<style>
  label{
    font-weight: bold;
    line-height: 30px;
  }
  input[type="text"]{
    width: 100%;
    box-sizing: border-box;
    line-height: 30px;
    font-size: 1rem;
  }
  .pokemons{
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
  }
  div.search-form{
    width: 100%;
    margin: 30px auto;
  }
  table{
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
  }
  table tr th, table tr td{
    border: 1px solid #ededed;
    padding:10px 20px;
    text-transform: capitalize;
  }
  table tr:nth-child(odd){
    background-color: #fff8e1;
  }
  table tr th{
    background-color: #ffcb05;
  }
  .empty-msg{
    background-color: tomato;
    padding: 5px 0;
    margin: 30px auto;
    font-weight: bold;
    color:#891500;
    border-radius: 3px;
  }
</style>

