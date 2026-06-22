import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/pages/login.vue'
import NotFound from '@/pages/404.vue'
import Admin from '@/layout/admin.vue'
import Index from '@/pages/index.vue'
import Personalinfo from '@/pages/personalinfo.vue'
import Personalwork from '@/pages/personalwork.vue'
import Editor from '@/pages/ctftoolbox/Editor.vue'
import Audacity from '@/pages/ctftoolbox/Audacity.vue'
import StegSolve from '@/pages/ctftoolbox/StegSolve.vue'
import Stream from '@/pages/ctftoolbox/stream.vue'
import Tweakpng from '@/pages/ctftoolbox/tweakpng.vue'
import Axios from '@/pages/frameworks/Axios.vue'
import Nodejs from '@/pages/frameworks/Nodejs.vue'
import NPM from '@/pages/frameworks/npm.vue'
import React from '@/pages/frameworks/React.vue'
import Vite from '@/pages/frameworks/Vite.vue'
import VuePage from '@/pages/frameworks/Vue.vue'
import VuexPage from '@/pages/frameworks/Vuex.vue'
import WindiCSS from '@/pages/frameworks/WindiCSS.vue'
import DoloCat from '@/pages/WriteUp/DoloCat.vue'
import HidePng from '@/pages/WriteUp/HidePng.vue'
import Moto from '@/pages/WriteUp/Moto.vue'
import WavHide from '@/pages/WriteUp/WavHide.vue'
import Webinfo from '@/pages/Webinfo.vue'
import Moment from '@/pages/moment.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    component: Admin,
    children: [{
      path: '/',
      component: Index,
    },
    {
      path: '/personalinfo',
      component: Personalinfo,
    },
    {
      path: '/personalwork',
      component: Personalwork,
    },
    {
      path: '/ctftoolbox/Editor',
      component: Editor,
    },
    {
      path: '/ctftoolbox/Audacity',
      component: Audacity,
    },
    {
      path: '/ctftoolbox/StegSolve',
      component: StegSolve,
    },
    {
      path: '/ctftoolbox/stream',
      component: Stream,
    },
    {
      path: '/ctftoolbox/tweakpng',
      component: Tweakpng,
    },
    {
      path: '/frameworks/Axios',
      component: Axios,
    },
    {
      path: '/frameworks/Nodejs',
      component: Nodejs,
    },
    {
      path: '/frameworks/npm',
      component: NPM,
    },
    {
      path: '/frameworks/React',
      component: React,
    },
    {
      path: '/frameworks/Vite',
      component: Vite,
    },
    {
      path: '/frameworks/Vue',
      component: VuePage,
    },
    {
      path: '/frameworks/Vuex',
      component: VuexPage,
    },
    {
      path: '/frameworks/WindiCSS',
      component: WindiCSS,
    },
    {
      path: '/WriteUp/DoloCat',
      component: DoloCat,
    },
    {
      path: '/WriteUp/HidePng',
      component: HidePng,
    },
    {
      path: '/WriteUp/Moto',
      component: Moto,
    },
    {
      path: '/WriteUp/WavHide',
      component: WavHide,
    },
    {
      path: '/Webinfo',
      component: Webinfo,
    },
    {
      path: '/moment',
      component: Moment,
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }],
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('isLogin')
  const whiteList = ['/login']

  if (whiteList.includes(to.path)) {
    next()
  } else if (!isLogin) {
    next('/login')
  } else {
    next()
  }
})

export default router
