<template>
  <div class="header-container" :class="{ 'header-scrolled': headerScrolled }">
    <span class="logo">
      <i class="el-icon-aim mr-1 text-lg"></i>Airline的个人博客
    </span>
    <el-tooltip content="导航栏" placement="top">
      <i class="el-icon-s-fold icon-botton mr-15px" @click="foldmenu()"></i>
    </el-tooltip>

    <el-tooltip content="刷新" placement="top">
      <span class="icon-botton" @click="handleRefresh()">
        <i class="el-icon-refresh refresh-icon" :class="{ 'refresh-spin': isRefreshing }"></i>
      </span>
    </el-tooltip>

    <div class="ml-auto flex items-center">
      <el-tooltip :content="ifFullScreen" placement="top">
        <i
          :class="ifFullScreen === '全屏' ? 'el-icon-full-screen' : 'el-icon-c-scale-to-original'"
          class="icon-botton mr-15px"
          @click="toggleFullScreen"
        ></i>
      </el-tooltip>
      <el-dropdown class="dropdown">
        <span class="flex items-center text-light-50">
          <el-avatar :size="40" :src="$img('Tom.jpg')" />
          <span class="text-light-50 flex-row ml-10px text-xl">Airline</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { showwarning } from '@/methord'
import { bus } from '@/bus'

export default {
  data() {
    return {
      ifFullScreen: '全屏',
      headerScrolled: false,
      isRefreshing: false
    }
  },
  mounted() {
    bus.on('refreshPage', this.onRefreshSpin)
    this.$nextTick(() => {
      const main = document.getElementById('main-box')
      if (main) {
        main.addEventListener('scroll', this.onMainScroll)
      }
    })
  },
  beforeDestroy() {
    bus.off('refreshPage', this.onRefreshSpin)
    const main = document.getElementById('main-box')
    if (main) {
      main.removeEventListener('scroll', this.onMainScroll)
    }
  },
  methods: {
    onMainScroll(e) {
      this.headerScrolled = e.target.scrollTop > 8
    },
    onRefreshSpin() {
      this.isRefreshing = true
      setTimeout(() => {
        this.isRefreshing = false
      }, 600)
    },
    logout() {
      showwarning('确认登出?', 'warning')
        .then(() => {
          localStorage.removeItem('isLogin')
          this.$message({
            type: 'success',
            message: '登出成功!',
          })
          this.$router.replace('/login')
        })
        .catch(() => {})
    },
    async toggleFullScreen() {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
        this.ifFullScreen = '退出全屏'
      } else {
        await document.exitFullscreen()
        this.ifFullScreen = '全屏'
      }
    },
    foldmenu() {
      bus.emit('toggleAside')
    },
    handleRefresh() {
      this.$message.success({
        message: '页面刷新中...',
        duration: 1000,
      })
      bus.emit('refreshPage')
    }
  }
}
</script>

<style scoped>
.header-container {
  @apply flex items-center bg-indigo-500 text-light-50 fixed top-0 left-0 right-0;
  height: 64px;
  z-index: 100;
  transition: box-shadow 0.3s ease;
}

.logo {
  width: auto;
  max-width: 160px;
  @apply flex justify-center items-center text-sm whitespace-nowrap;
}

.icon-botton {
  @apply flex justify-center items-center;
  width: 42px;
  height: 64px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.icon-botton:hover {
  @apply bg-indigo-700;
}

.refresh-icon {
  display: inline-block;
  font-size: 18px;
  line-height: 1;
}

.dropdown {
  height: 64px;
  cursor: pointer;
  @apply flex justify-center items-center mx-5;
}
</style>
