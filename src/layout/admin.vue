<template>
  <div class="common-layout">
    <fheader></fheader>
    <div class="layout-body">
      <faside :collapse="isCollapse"></faside>
      <el-main id="main-box" class="main-box">
        <ftaglist></ftaglist>
        <div
          class="page-wrapper"
          v-loading="pageRefreshing"
          element-loading-text="刷新中..."
        >
          <transition name="fade-slide" mode="out-in">
            <router-view v-if="showPage" :key="routerViewKey" class="page-content" />
          </transition>
        </div>
      </el-main>
    </div>
  </div>
</template>

<script>
import Fheader from './components/Fheader.vue'
import Faside from './components/Faside.vue'
import Ftaglist from './components/Ftaglist.vue'
import { bus } from '@/bus'

export default {
  components: {
    Fheader,
    Faside,
    Ftaglist
  },
  data() {
    return {
      isCollapse: false,
      routerViewKey: 0,
      showPage: true,
      pageRefreshing: false
    }
  },
  mounted() {
    bus.on('toggleAside', this.toggleAside)
    bus.on('refreshPage', this.refreshPage)
  },
  beforeDestroy() {
    bus.off('toggleAside', this.toggleAside)
    bus.off('refreshPage', this.refreshPage)
  },
  methods: {
    toggleAside() {
      this.isCollapse = !this.isCollapse
    },
    refreshPage() {
      this.pageRefreshing = true
      this.showPage = false
      this.$nextTick(() => {
        this.routerViewKey += 1
        this.showPage = true
        this.$nextTick(() => {
          setTimeout(() => {
            this.pageRefreshing = false
          }, 500)
        })
      })
    }
  }
}
</script>

<style scoped>
.common-layout {
  min-height: 100vh;
}

.layout-body {
  display: flex;
  padding-top: 64px;
  min-height: 100vh;
}

.main-box {
  flex: 1;
  min-width: 0;
  padding: 0;
  overflow: auto;
  height: calc(100vh - 64px);
  background: #f8fafc;
}

.page-wrapper {
  position: relative;
  min-height: calc(100vh - 64px - 41px);
}

.page-content {
  padding-top: 50px;
}
</style>
