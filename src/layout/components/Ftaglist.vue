<template>
  <div class="maincontent">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      class="demo-tabs"
      editable
      @edit="handleTabsEdit"
      @tab-click="handleTabClick"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      />
    </el-tabs>
    <button
      type="button"
      class="clear-btn"
      title="关闭所有标签页"
      @click="clearAllTags"
    >
      <i class="el-icon-close"></i>
    </button>
  </div>
</template>

<script>
import { bus } from '@/bus'

export default {
  data() {
    return {
      editableTabsValue: '1',
      editableTabs: [
        { title: '首页', name: '1', path: '/' }
      ],
      tabRouteMap: {
        '1': '/',
        '2-1': '/WriteUp/Moto',
        '2-2': '/WriteUp/DoloCat',
        '2-4': '/WriteUp/WavHide',
        '3-1-1': '/frameworks/Vue',
        '3-1-2': '/frameworks/Axios',
        '3-1-3': '/frameworks/Vuex',
        '3-1-4': '/frameworks/React',
        '3-2-1': '/frameworks/WindiCSS',
        '3-3-1': '/frameworks/Vite',
        '3-3-2': '/frameworks/npm',
        '3-3-3': '/frameworks/Nodejs',
        '4-1': '/ctftoolbox/Editor',
        '4-2': '/ctftoolbox/stream',
        '4-3': '/ctftoolbox/tweakpng',
        '4-4': '/ctftoolbox/StegSolve',
        '4-5': '/ctftoolbox/Audacity',
        '5': '/moment',
        '6': '/personalwork',
        '7': '/Webinfo'
      }
    }
  },
  mounted() {
    bus.on('addTab', this.onAddTab)
  },
  beforeDestroy() {
    bus.off('addTab', this.onAddTab)
  },
  methods: {
    handleTabClick(tab) {
      const path = this.tabRouteMap[tab.name]
      if (path) {
        this.$router.push(path)
      }
    },
    clearAllTags() {
      this.editableTabs = [
        { title: '首页', name: '1', path: '/' }
      ]
      this.editableTabsValue = '1'
      this.$router.push('/')
    },
    handleTabsEdit(targetName, action) {
      if (action === 'remove' && targetName === '1') {
        return
      }
      if (action === 'add') {
        return
      }

      if (action === 'remove') {
        const tabs = this.editableTabs
        let activeName = this.editableTabsValue

        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)

        const nextPath = this.tabRouteMap[activeName] || '/'
        this.$router.push(nextPath)
      }
    },
    onAddTab(item) {
      const exist = this.editableTabs.find(t => t.name === item.name)
      if (exist) {
        this.editableTabsValue = item.name
        const path = this.tabRouteMap[item.name] || '/'
        this.$router.push(path)
        return
      }

      this.editableTabs.push({
        title: item.title,
        name: item.name,
        path: this.tabRouteMap[item.name] || '/'
      })
      this.editableTabsValue = item.name
      const path = this.tabRouteMap[item.name] || '/'
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.maincontent {
  width: 100%;
  height: 41px;
  @apply flex items-center sticky top-0 bg-gray-100 overflow-hidden;
  z-index: 10;
}

.demo-tabs {
  flex: 1;
  min-width: 0;
}

.clear-btn {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background-color: #f9fafb;
  color: #606266;
  cursor: pointer;
}

.clear-btn:hover {
  background-color: #e5e7eb;
  color: #303133;
}

::v-deep .el-tabs {
  width: 100%;
  overflow-x: auto !important;
  overflow-y: hidden !important;
  white-space: nowrap !important;
  flex-wrap: nowrap !important;
}

::v-deep .el-tabs__header {
  margin: 0;
}

::v-deep .el-tabs__new-tab {
  display: none;
}

::v-deep .el-tabs__nav-wrap {
  overflow: auto !important;
}

::v-deep .el-tabs__nav-wrap::-webkit-scrollbar {
  display: none !important;
}
</style>
