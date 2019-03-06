import Vue from 'vue'
import Router from 'vue-router'
import Artists from './components/Artists.vue'
import Tracks from './components/Tracks.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			name: 'artists',
			component: Artists
		},
		{
			path: '/:id',
			name: 'tracks',
			component: Tracks
		}
  ]
})
