<template>
    <div class="f-aside" :class="{ 'is-collapse': collapse }">
        <el-menu
            :key="menuKey"
            class="f-menu"
            :default-active="activeMenu"
            :default-openeds="openMenus"
            :collapse="collapse"
            @open="handleOpen"
            @close="handleClose"
        >

            <el-menu-item index="1" @click="addTab('1', '首页'); jumpIndex()">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>



            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-data-line"></i>
                    <span>前端热门工具</span>
                </template>
                <el-submenu index="3-1">
                    <template slot="title"><span>JS</span></template>
                    <el-menu-item index="3-1-1" @click="addTab('3-1-1', 'Vue3'); jumpVue()">Vue3</el-menu-item>
                    <el-menu-item index="3-1-2" @click="addTab('3-1-2', 'Axios'); jumpAxios()">Axios</el-menu-item>
                    <el-menu-item index="3-1-3" @click="addTab('3-1-3', 'Vuex'); jumpVuex()">Vuex</el-menu-item>
                    <el-menu-item index="3-1-4" @click="addTab('3-1-4', 'React'); jumpReact()">React</el-menu-item>
                </el-submenu>
                <el-submenu index="3-2">
                    <template slot="title"><span>CSS</span></template>
                    <el-menu-item index="3-2-1" @click="addTab('3-2-1', 'Windi CSS'); jumpWindiCSS()">Windi
                        CSS</el-menu-item>
                </el-submenu>
                <el-submenu index="3-3">
                    <template slot="title"><span>工程化工具</span></template>
                    <el-menu-item index="3-3-1" @click="addTab('3-3-1', 'Vite'); jumpVite()">Vite</el-menu-item>
                    <el-menu-item index="3-3-2" @click="addTab('3-3-2', 'NPM'); jumpNPM()">NPM</el-menu-item>
                    <el-menu-item index="3-3-3" @click="addTab('3-3-3', 'Node.js'); jumpNodejs()">Node.js</el-menu-item>
                </el-submenu>
            </el-submenu>


            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>CTF工具大全</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1" @click="addTab('4-1', '010Editor'); jumpEditor()">010Editor</el-menu-item>
                    <el-menu-item index="4-2" @click="addTab('4-2', '随波逐流'); jumpStream()">随波逐流</el-menu-item>
                    <el-menu-item index="4-3" @click="addTab('4-3', 'tweakpng'); jumptweakpng()">tweakpng</el-menu-item>
                    <el-menu-item index="4-4"
                        @click="addTab('4-4', 'StegSolve'); jumpStegSolve()">StegSolve</el-menu-item>
                    <el-menu-item index="4-5" @click="addTab('4-5', 'Audacity'); jumpAudacity()">Audacity</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>个人writeup</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1" @click="addTab('2-1', '小摩托'); jumpMoto()">小摩托</el-menu-item>
                    <el-menu-item index="2-2" @click="addTab('2-2', '龙猫'); jumpDoloCat()">龙猫</el-menu-item>
                    <el-menu-item index="2-4" @click="addTab('2-4', 'mp3&wav隐藏'); jumpWavHide()">mp3&wav隐藏</el-menu-item>
                    <el-menu-item disabled index="2-3" @click="addTab('2-3', '图片隐写'); jumpHidePng()">持续更新中......</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="6" @click="addTab('6', '个人作品集'); jumpPersonalWork()">
                <i class="el-icon-picture"></i>
                <span slot="title">个人作品集</span>
            </el-menu-item>

            <el-menu-item index="5" @click="addTab('5', '技术动态'); jumpMoment()">
                <i class="el-icon-time"></i>
                <span slot="title">技术动态</span>
            </el-menu-item>

            <el-menu-item index="7" @click="addTab('7', '关于本站');jumpWebinfo()">
                <i class="el-icon-more"></i>
                <span slot="title">关于本站</span>
            </el-menu-item>

        </el-menu>
    </div>
</template>

<script>
import { bus } from '@/bus'
import { getMenuStateByPath } from '@/config/menu'

export default {
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeMenu: '1',
      openMenus: [],
      menuKey: 0
    }
  },
  watch: {
    '$route.path': {
      immediate: true,
      handler(path) {
        this.syncMenuByRoute(path)
      }
    }
  },
  methods: {
    syncMenuByRoute(path) {
      const { active, openeds } = getMenuStateByPath(path)
      this.activeMenu = active
      this.openMenus = openeds
      this.menuKey += 1
    },
    handleOpen() {},
    handleClose() {},
    addTab(name, title) {
      bus.emit('addTab', { name, title })
    },
    jumpIndex() {
      this.$router.push('/')
    },
    jumpPersonalWork() {
      this.$router.push('/personalwork')
    },
    jumpMoment() {
      this.$router.push('/moment')
    },
    jumpMoto() {
      this.$router.push('/WriteUp/Moto')
    },
    jumpAudacity() {
      this.$router.push('/ctftoolbox/Audacity')
    },
    jumpEditor() {
      this.$router.push('/ctftoolbox/Editor')
    },
    jumpStegSolve() {
      this.$router.push('/ctftoolbox/StegSolve')
    },
    jumpStream() {
      this.$router.push('/ctftoolbox/stream')
    },
    jumptweakpng() {
      this.$router.push('/ctftoolbox/tweakpng')
    },
    jumpAxios() {
      this.$router.push('/frameworks/Axios')
    },
    jumpNodejs() {
      this.$router.push('/frameworks/Nodejs')
    },
    jumpNPM() {
      this.$router.push('/frameworks/npm')
    },
    jumpReact() {
      this.$router.push('/frameworks/React')
    },
    jumpVite() {
      this.$router.push('/frameworks/Vite')
    },
    jumpVue() {
      this.$router.push('/frameworks/Vue')
    },
    jumpVuex() {
      this.$router.push('/frameworks/Vuex')
    },
    jumpWindiCSS() {
      this.$router.push('/frameworks/WindiCSS')
    },
    jumpDoloCat() {
      this.$router.push('/WriteUp/DoloCat')
    },
    jumpHidePng() {
      this.$router.push('/WriteUp/HidePng')
    },
    jumpWavHide() {
      this.$router.push('/WriteUp/WavHide')
    },
    jumpWebinfo() {
      this.$router.push('/Webinfo')
    }
  }
}
</script>

<style>
.f-aside {
    flex-shrink: 0;
    width: 200px;
    height: calc(100vh - 64px);
    overflow-x: hidden;
    overflow-y: auto;
    transition: width 0.3s ease;
    @apply bg-light-50;
}

.f-aside.is-collapse {
    width: 64px;
}

.f-menu {
    width: 100% !important;
    min-height: 100%;
    border-right: none !important;
    @apply shadow-md;
}

.f-menu:not(.el-menu--collapse) {
    width: 200px !important;
}

.f-menu.el-menu--collapse {
    width: 64px !important;
}

.f-menu .el-menu-item:hover,
.f-menu .el-submenu__title:hover {
    background-color: rgba(99, 102, 241, 0.08) !important;
}

.f-menu .el-menu-item.is-active {
    background: linear-gradient(90deg, rgba(99, 102, 241, 0.15), transparent) !important;
    border-right: 3px solid #6366f1;
}
</style>
