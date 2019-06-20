import Vue from 'vue'
import Router from 'vue-router'
import PokeList from '@/components/PokeList'
import PokeInfo from '@/components/PokeInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PokeList',
      component: PokeList
    },
    {
      path: '/:q',
      name: 'PokeListFiltered',
      component: PokeList
    },
    {
      path: '/pokemon/:poke_id',
      name: 'PokeInfo',
      component: PokeInfo
    }
  ]
})
