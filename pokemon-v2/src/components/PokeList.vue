<template>
  <div class="poke-list">
    <h1>Pokédex v2</h1>
    <div class="outside-table">
      <div class="poke-search">
        <label for="search"> Search:</label>
        <input type="text" name="search" v-model="searchTerm" placeholder="Enter Pokemon name...">
      </div>
      <div v-if="pokeList" class="table-wrapper">
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pokemon in filteredPokemon" :key="pokemon.id" :id="pokemon.id">
            <td class="poke-id">
              <router-link v-if="pokemon.id" :to="{ name: 'PokeInfo', params: { poke_id: pokemon.id } }">{{ pokemon.id }}</router-link>
            </td>
            <td :id="pokemon.name">
              <router-link v-if="pokemon.name" :to="{ name: 'PokeInfo', params: {poke_id: pokemon.id } }">{{ pokemon.name }}</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div style="clear:both;"></div>
    </div>

  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'PokeList',
  data() {
    return {
      pokeList: [],
      searchTerm: ''
    }
  },
  created() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => {
      this.pokeList = response.data.results
      this.pokeList = this.pokeList.map((pokemon, index) => {
        pokemon['id'] = index + 1
        return pokemon
      })
    })
  },
  mounted() {
    if(localStorage.pokeList) {
      this.pokeList = localStorage.pokeList
      console.log('Data load from cache')
    }
  },
  computed: {
    filteredPokemon() {
      if(this.searchTerm === ''){
        return this.pokeList
      }
      return Array.from(this.pokeList).filter(pokemon => {
        return pokemon.name.toLowerCase().match(this.searchTerm.toLowerCase())
      })
    }
  },
  watch: {
    pokeList(newList) {
      localStorage.pokeList = newList
    }
  }
}
</script>

<style>
a{
  display: block;
  text-decoration: none;
  color: inherit;
}
.poke-search{
  padding: 20px 0;
  margin-bottom: 10px;
}
.poke-search input[type="text"]{
  height:30px;
  font-size: 1.3rem;
  color: #2c3e50;
}
div.outside-table{
  padding: 1rem;
  background-color: #fff;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 10px;
}
div.table-wrapper{
  width: 100%;
  display: block;
  height: 100%;
  max-height: 65vh;
  overflow-y: scroll;
  padding: 0;
  border:1px solid #ededed;
}
table {
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
}
table thead{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: #ffcb05;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.40);
}
table thead th{
  padding: 10px 0;
}
table tbody tr td{
  border: 1px solid #ededed;
  padding: 10px 20px;
  text-transform: capitalize;
}
table tbody tr td.poke-id{
  width: 20%;
}
table tbody tr:nth-child(odd){
  background-color: #efefef;
}
table tbody tr{
  color: #2c3e50;
}
table tbody tr:hover{
  background-color: #d5d5d5;
  cursor: pointer;
  transition: all .5s ease-out;
  color: #0060ba;
  font-weight: bold;
}
</style>
