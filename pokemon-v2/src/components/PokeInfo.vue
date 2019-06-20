<template>
  <div class="poke-info">
    <h1 v-if="pokeInfo.id">#{{pokeInfo.id}} - {{pokeInfo.name}}</h1>
    <div :class="'poke-card '+pokeInfo.name">
      <div v-if="pokeInfo.sprites" class="poke-img" :class="pokeTypes()">
        <img :src="pokeInfo.sprites.front_default" alt="">
      </div>
      <div class="poke-data">
        <table>
          <tr>
            <td>Type:</td>
            <td>
              <span v-for="(type, index) in pokeTypes()" :key="index" :class="'label-type '+type">
                {{type}}
              </span>
            </td>
          </tr>
          <tr>
            <td>Exp.:</td>
            <td>{{pokeInfo.base_experience}}</td>
          </tr>
          <tr>
            <td>Height:</td>
            <td>{{pokeInfo.height / 10}} m</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{{pokeInfo.weight / 10}} kg</td>
          </tr>
        </table>
      </div>
    </div>
    <a href="#" class="back-button" @click="goBack">Back</a>
  </div>
</template>

<script>
import axios from 'axios'

require('@/assets/css/PokeInfo.css')

export default {
  name: 'PokeInfo',
  data() {
    return {
      poke_id: this.$route.params.poke_id,
      pokeInfo: {}
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    pokeTypes() {
      let pokeTypesArr = this.pokeInfo.types.map(e => {
        return e.type.name
      })
      return pokeTypesArr
    }
  },
  created() {
    axios.get('https://pokeapi.co/api/v2/pokemon/'+this.poke_id)
    .then(response => {
      this.pokeInfo = response.data
    })
  }
}
</script>
