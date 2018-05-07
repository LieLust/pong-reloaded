import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Coucou from '@/components/Coucou'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/coucou/',
      name: 'Coucou',
      component: Coucou
    },
    {
      path: '*',
      redirect: '/notfound'
    }
  ]
})
