<template>
  <div id="app">
    <router-link :to="{ name: 'PokeList' }"><img src="./assets/poke-logo.png"></router-link>
    <router-view/>
    <footer>- Matheus Vieira - 2019 -</footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background-image: linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #bce169);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #004c79;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
}
footer{
  padding-top:15px;
  font-style: italic;
  color:#a5a5a5;
  margin-top: 15px;
  border-top: 1px solid #2c3e50;
}
</style>
